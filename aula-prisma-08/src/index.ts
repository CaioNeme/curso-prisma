import prisma from "./database";

// (async () => {
//   const students = await prisma.student.groupBy({
//     by:["jobId"],
//     _count:{
//       jobId:true
//     },
//     orderBy:{
//       _count:{jobId:"desc"}
//     }
//   })
//   console.log(students);
// })

(async () => {
  const students = await prisma.student.groupBy({
    by:["jobId"],
      _count:{_all:true},
      where:{jobId:{
        equals: null
      }},
        orderBy:{
          _count:{jobId:"desc"}
        }
      })
   console.log(students);

})
