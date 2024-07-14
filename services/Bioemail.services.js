const fs = require('fs');
const path = require('path');
const OfDataRawEmails = require('../models/Ofdatarawemails.model');
const BioEmail = require('../models/Bioemail.model');


module.exports.addNewBioEmail = async (req, res, next) => {
  const AllUsersFromOfDataRawEmails = await OfDataRawEmails.find({}).select('of_url bio subscribers -_id');
  let count = 0;
  const jsonData = []; 

  AllUsersFromOfDataRawEmails.forEach(async (user) => {
    if (user?.bio && user?.bio?.length > 0) {
      const bioToBeTested = user.bio;
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      const emailsFromTheBio = bioToBeTested.match(emailRegex) || [];
      
      if (emailsFromTheBio?.length > 0) {
        const userToBeCreatedInBioEmailsCollection = {
          bio_email: emailsFromTheBio,
          of_url: user?.of_url,
          subscribers: user?.subscribers,
        };
        
        jsonData.push(userToBeCreatedInBioEmailsCollection);
      }
    }
  });

  const fileName = 'bioEmails.json';
  const filePath = path.join(__dirname, '..', 'data', fileName);
  const fileContent = JSON.stringify(jsonData, null, 2);
  
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file created:', fileName);
    }
  });
};
