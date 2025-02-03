import {saveData} from '../config/db.js'

export const saveInfo = async(req, res) =>{
    const {businessInfo} = req.body
    saveData(businessInfo)
}