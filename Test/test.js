// Given list of zip codes
// Function returns array of objects with full zip code and zone

const zippy = object => {
  const result = [];

  // Iterate through zone and zips
  for (let i = 0; i < object.zone.length; i++) {
    const newObject = {"zone" : object.zone[i],
                        "zips" :[]};
    
    let zip = object.zips[i]; // 350-358
    let zipArr = zip.split('-'); // ['350', '358']
    for (let j = 0; j < (zipArr[1] - zipArr[0]); j++) {
      let num = Number(zipArr[0]) + j;
      num = num * 100;
      for (let k = 0; k < 100; k++) {
        let numK = num + k;
        // Push num to zips array in newObject
        newObject['zips'].push(numK);
      } 
    }
    result.push(newObject);
  }
  return result;
}

/* Jason Recs

  Array of zip codes 
  Append to zip code
  

*/



// 35000 35001 35898 35899
// {zone: 007,
//  zips: 35000 35001 35898 35899}

const excel = {zips: ["350-358", "359-364", "365-367"],
               zone: ['007', '008', '009']}


console.log(zippy(excel));