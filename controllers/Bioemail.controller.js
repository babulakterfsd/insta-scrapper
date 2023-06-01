const { getAllBioEmails, addNewBioEmail } = require("../services/Bioemail.services")


module.exports.addNewBioEmail = async ( req, res, next ) => {
    await addNewBioEmail(req, res, next)

    res.status(201).json({
        success: true,
        message: 'saving bioemails...',
    })


    // if(result) {
    //     res.status(201).json({
    //         success: true,
    //         message: 'BioEmail added successfully',
    //     })
    // } else {
    //     res.status(500).json({
    //         success: false,
    //         message: 'Something went wrong',
    //     })
    // }
}



module.exports.getBioEmais =  async ( req, res, next ) => {
    const result = await getAllBioEmails()

    res.status(200).json({
        success: true,
        message: 'bioemails fetched successfully',
        data: result,
    })

    if(result?.length > 0) {
        res.status(200).json({
            success: true,
            message: 'Usernames fetched successfully',
        })
    } else {
        res.status(404).json({
            success: false,
            message: 'No usernames found',
        })
    }
}