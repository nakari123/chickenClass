const fs = require('fs');
const dateFormat = require('dateformat');
const express = require('express');
const app = express();

const STUDENT_DATA = {
  'student_name': '',
  'data': []
}
const dataSample = [
  {
    time: "2020/08",
    attendance: []
  }
]
const CLASS_DATA = {
  'class_name': '',
  'data': []
}

function createClass(className) {
  var path = `./data/${encodeURI(className)}.json`;
  var dataClass = {...CLASS_DATA};
  dataClass.class_name = className;
  return writeFileCustom(path, CLASS_DATA);
}

function writeFileCustom(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, JSON.stringify(data), {flag: 'w'}, function (err) {
      if (err) {
        reject(err);
      }
      resolve('Write File OK');
    });
  });
}

function createStudent(className, studentName) {
  let path = `./data/${encodeURI(className)}.json`;
  return new Promise(function (resolve, reject) {
    try {
      let rawDataClass = fs.readFileSync(path).toString();
      let dataClass = JSON.parse(rawDataClass);
      if (dataClass) {
        let isExistStudent = function () {
          let result = dataClass.data.find((data) => {
            return data.student_name === studentName;
          });
          return !!result;
        }
        if (isExistStudent()) {
          reject('Student already existed');
        }
        let dataStudent = {...STUDENT_DATA};
        dataStudent.student_name = studentName;
        dataClass.data.push(dataStudent);
        return writeFileCustom(path, dataClass);
      }
      reject('Data not found');
    } catch (err) {
      reject(err);
    }
  });
}

function getDataClass(className) {
  let path = `./data/${encodeURI(className)}.json`;
  return new Promise(function (resolve, reject) {
    try {
      let rawDataClass = fs.readFileSync(path).toString();
      let dataClass = JSON.parse(rawDataClass);
      if (dataClass) {
        resolve(dataClass);
      }
      reject('Data not found');
    } catch (err) {
      reject(err);
    }
  })
}

function getListClass() {
  return new Promise(function (resolve, reject) {
    fs.readdir('./data', (err, files) => {
      if (err) {
        reject(err);
      }
      let result = [];
      files.forEach(file => {
        result.push(decodeURI(file).replace('.json', ''));
      });
      resolve(result);
    });
  });
}

async function attendance(className, studentName) {
  try {
    let dataClass = await getDataClass(className);
    let dataStudent = dataClass.data.find((data) => {
      return data.student_name === studentName;
    });
    let now = new Date();
    let keyMonthAndYear = dateFormat(now, "yyyy/mm");
    let dataMonth = dataStudent.data.find((data) => {
      return data.time === keyMonthAndYear;
    });
    let date = now.getDate();
    if (dataMonth.attendance.includes(date)) {
      dataMonth.attendance = dataMonth.attendance.filter((v) => {
        return v !== date;
      });
    } else {
      dataMonth.attendance.push(date);
    }
    let path = `./data/${encodeURI(className)}.json`;
    await writeFileCustom(path, dataClass);
  } catch (err) {
    console.log(err);
  }
}

// createClass('Lớp thứ 5').then(() => {
//   console.log('OK');
// }).catch((err) => {
//   console.log(err)
// });
// createStudent('Lớp thứ 5', 'a').then()
// getListClass().then((data) => {
//   console.log(data);
// })

attendance('Lớp thứ 5', 'a');


