const User = require("../models/userModel");
const Profile = require("../models/profileModel");

const getProfile = async (res,req) =>{
    const data = await Profile.find({});
    return res.status(200).json({
        message: "Profile fetched successfully",
        data
    })
}

const createProfile = async(req,res)=>{
    const {imageUrl, summary, skills, workExperience, linkedinUrl, githubUrl, codingPlatforms, resumeUrl} = req.body;
    if(!imageUrl || !summary || !skills || !workExperience || !linkedinUrl || !githubUrl || !codingPlatforms || !resumeUrl){
        return res.status(400).json({message: "Please fill all the fields"});
    }

    const newProfile = await Profile.create({
        imageUrl,
        summary,
        skills,
        workExperience,
        linkedinUrl,
        githubUrl,
        codingPlatforms,
        resumeUrl
    })


    const data = await newProfile.save();

    if(data){
        return res.status(201).json({
            message: "Profile created successfully",
            data
        });
    }
    else{
        return res.status(500).json({
            message: "Error creating profile"
        });
    }
}

const updateProfile = async (req, res)=>{

    const {imageUrl, summary, skills, workExperience, linkedInUrl, githubUrl, CodingPlatform, resumeUrl} = req.body;
    
    const dataOfUser = req.user[0];
    // console.log(dataOfUser);
    
    const { _id} = dataOfUser;
    // console.log(_id);
    const checkUserId = await Profile.findOne({userId: _id});
    if(checkUserId){
        return res.status(400).json({message : "profile already exist"});
    }
    
    

    if(!imageUrl || !summary || !skills || !workExperience || !linkedInUrl || !githubUrl || !CodingPlatform || !resumeUrl){
        return res.status(400).json({message : "Please add all mandatory fields"});
    }

    const newProfile = await Profile.create({
        userId: _id,
        imageUrl,
        summary,
        skills,
        workExperience,
        linkedInUrl,
        githubUrl,
        CodingPlatform,
        resumeUrl
    })

    const data = await newProfile.save();

    return res.status(200).json({message : "Profile Created",
        data
    })
}


module.exports = {
    getProfile,
    createProfile,
    updateProfile
};