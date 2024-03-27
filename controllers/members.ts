import { Member } from '../models/Member'

// need to give proper types to req/res
const memberById = async (req: any, res: any) => {
  try {
    console.log(req)
    const member = await Member.findByPk(2)
    console.log(member)
    res.send(member)
  } catch (error) {
    console.log(error)
  }
}

export default {
  memberById
}