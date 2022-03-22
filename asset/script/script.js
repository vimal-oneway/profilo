// function info(status, idName) {
//   const hideInfo = document.querySelector(`#${idName}`);
//   var clName = hideInfo.className;
//   if (status != "out") {
//     // clearTimeout(idRemove);
//     if (clName == "hello" || clName == "") {
//       hideInfo.classList.add("work-con--info");
//     }

//     hideInfo.style.animation = "infoSlideIn 2.2s 1 ease-in-out";

//     console.log("in");
//   } else if (status != "in") {
//     if (clName == "work-con--info") {
//       setTimeout(hideInfo.classList.replace("work-con--info", "hello"), 3000);
//     }
//     console.log("out");
//   }
//   //  else if (status != "in") {
//   // const hideInfo = document.querySelector(`#${idName}`);
//   // hideInfo.classList.add("work-con--info");
//   // setTimeout(
//   //   document
//   //     .getElementsByClassName("work-con--info")
//   //     .classList.remove("work-con--info"),
//   //   10000
//   // );
//   // console.log("out");
//   // document.querySelector(".work-con--info").style.animation = "";
//   // hideInfo.style.animation = "infoSlideOut 5s 1 ease-in-out";
//   // hideInfo.classList.remove("work-con--info");
//   // }
// }
