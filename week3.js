const POUND2KG = 0.453592

const INCH2METER = 0.0254

//ตั้งตัวแปรกำหนดค่าเพื่อไปคำนวณ

function getBMI(weightP, heightM) {

  return ((Number(weightP) * POUND2KG) / Math.pow((Number(heightM) * INCH2METER), 2)).toFixed(1)

}

//เข้าสูตรหา  BMI คือ kg/m^2 นำตัวแปรที่กำหนดค่าไว้มาคำนวณ
//โดยการใช้ Math.pow เพื่อหาเลขยกกำลัง
//ใช้ toFixed(1) เพื่อกำหนดทศนิยม 1 ตำแหน่ง 

console.log(getBMI(36.5, 39))

console.log(getBMI(40.5, 50))

console.log(getBMI(62.8, 45))
