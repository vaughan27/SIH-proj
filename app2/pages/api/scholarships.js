import { connectToDatabase } from "../../utils/mongodb";


export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
              const { db } = await connectToDatabase();
              const scholarships = await db
                .collection("scholarships")
                .find({})
                .toArray();
                res.status(200).json({ success: true, data: scholarships })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            
        case 'POST':
            try {
              const { db } = await connectToDatabase();
              const NewScholarship = await db
              .collection("scholarships")
              .insertOne((req.body));
                res.status(201).json({ success: true, data:NewScholarship })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
// import { connectToDatabase } from "../../utils/mongodb";

// export default async (req, res) => {
//   const { db } = await connectToDatabase();

//   const scholarships = await db
//     .collection("scholarships")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();

//   res.json(scholarships);
// };