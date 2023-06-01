const BioEmail = require('../models/Bioemail.model');
const OfDataRawEmails = require('../models/Ofdatarawemails.model');


module.exports.addNewBioEmail = async (req, res, next) => {
     const AllUsersFromOfDataRawEmails = await OfDataRawEmails.find({}).select('of_url bio subscribers -_id')
     let count = 0;
     
     AllUsersFromOfDataRawEmails.forEach(async (user) => {
        
         if(user?.bio && user?.bio?.length > 0) {
              const bioToBeTested = user.bio;
              const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
              const emailsFromTheBio = bioToBeTested.match(emailRegex) || [];
              if(emailsFromTheBio?.length > 0) {
                const userToBeCreatedInBioEmailsCollection = {
                    bio_email: emailsFromTheBio,
                    of_url: user?.of_url,
                    subscribers: user?.subscribers,
                }
                const userToBeSaved = new BioEmail(userToBeCreatedInBioEmailsCollection)
                const result = await userToBeSaved.save()
                console.log('data saved', count++);
              }
         } 
     })
}

module.exports.getAllBioEmails = async () => {
    const result = await OfDataRawEmails.find({}).count()
    return result
}

