

var studentName = prompt('Enter the student name')
var rollNo = prompt('Enter the roll number')
var className = prompt('Enter the class name')


var chemistry = +prompt('Enter the chemistry marks')
var physics = +prompt('Enter the physics marks')
var biology = +prompt('Enter the biology marks')
var english = +prompt('Enter the english marks')
var maths = +prompt('Enter the maths marks')
var urdu = +prompt('Enter the urdu marks')
var islamiat = +prompt('Enter the islamiat marks')
var pakStudy = +prompt('Enter the pakStudy marks')
var computer = +prompt('Enter the computer marks')


var totalEnglish = 100
var totalUrdu = 100
var totalPhysics = 60
var totalChemistry = 60
var totalBiology = 60
var totalIslamiat = 50
var totalPakStudy = 50
var totalComputer = 50
var totalMaths = 100


function subjectPercentage(obtained, total) {
  return ((obtained / total) * 100).toFixed(2)
}


function subjectGrade(per) {


  if (per >= 80) {
    return 'A+'
  } else if (per >= 70) {
    return 'A'
  } else if (per >= 60) {
    return 'B'
  } else if (per >= 50) {
    return 'C'
  } else if (per >= 40) {
    return 'D'
  } else {
    return 'F'
  }


}


var obtainedTotal = chemistry + physics + biology + english + urdu + pakStudy + islamiat + computer + maths
var grandTotal = totalBiology + totalChemistry + totalComputer + totalEnglish + totalIslamiat + totalMaths + totalPakStudy + totalPhysics + totalUrdu
var overallPercentage = ((obtainedTotal / grandTotal) * 100).toFixed(2)
var overallGrade = subjectGrade(overallPercentage)
var overallStatus = overallPercentage >= 40 ? 'PASS' : 'FAIL'


document.writeln(`
        <div class= 'student-marksheet'>
           <h1>ABC PUBLIC SCHOOL KARACHI</h1>
           <h2>STUDENT MARKSHEET</h2>

         <div class= 'student-info'>
             <div>Student Name: ${studentName}</div>
             <div>Student Roll: ${rollNo}</div>
             <div>Student Class: ${className}</div>
         </div>

         
         <table>
            
             <tr>
                <th>Subject</th>
                <th>Obtained marks</th>
                <th>Total marks</th>
                <th>Percentage</th>
                <th>Grade</th>
             
             </tr>

             <tr>
                <td>Chemistry</td>
                <td>${chemistry}</td>
                <td>${totalChemistry}</td>
                <td>${subjectPercentage(chemistry, totalChemistry)}%</td>
                <td>${subjectGrade(subjectPercentage(chemistry, totalChemistry))}</td>

             </tr>

              <tr>
                <td>Physics</td>
                <td>${physics}</td>
                <td>${totalPhysics}</td>
                <td>${subjectPercentage(physics, totalPhysics)}%</td>
                <td>${subjectGrade(subjectPercentage(physics, totalPhysics))}</td>

             </tr>
         
             <tr>
                <td>Biology</td>
                <td>${biology}</td>
                <td>${totalBiology}</td>
                <td>${subjectPercentage(biology, totalBiology)}%</td>
                <td>${subjectGrade(subjectPercentage(biology, totalBiology))}</td>

             </tr>

             
             <tr>
                <td>English</td>
                <td>${english}</td>
                <td>${totalEnglish}</td>
                <td>${subjectPercentage(english, totalEnglish)}%</td>
                <td>${subjectGrade(subjectPercentage(english, totalEnglish))}</td>

             </tr>

             
             <tr>
                <td>Urdu</td>
                <td>${urdu}</td>
                <td>${totalUrdu}</td>
                <td>${subjectPercentage(urdu, totalUrdu)}%</td>
                <td>${subjectGrade(subjectPercentage(urdu, totalUrdu))}</td>

             </tr>

             
             <tr>
                <td>Islamiat</td>
                <td>${islamiat}</td>
                <td>${totalIslamiat}</td>
                <td>${subjectPercentage(islamiat, totalIslamiat)}%</td>
                <td>${subjectGrade(subjectPercentage(islamiat, totalIslamiat))}</td>

             </tr>

             
             <tr>
                <td>Maths</td>
                <td>${maths}</td>
                <td>${totalMaths}</td>
                <td>${subjectPercentage(maths, totalMaths)}%</td>
                <td>${subjectGrade(subjectPercentage(maths, totalMaths))}</td>

             </tr>

             
             <tr>
                <td>Pak Study</td>
                <td>${pakStudy}</td>
                <td>${totalPakStudy}</td>
                <td>${subjectPercentage(pakStudy, totalPakStudy)}%</td>
                <td>${subjectGrade(subjectPercentage(pakStudy, totalPakStudy))}</td>

             </tr>

             
             <tr>
                <td>Computer</td>
                <td>${computer}</td>
                <td>${totalComputer}</td>
                <td>${subjectPercentage(computer, totalComputer)}%</td>
                <td>${subjectGrade(subjectPercentage(computer, totalComputer))}</td>

             </tr>

         </table>
         
         
         
             <table class = 'summary'>
                 <tr>
                     <td>Grand Total</td>
                     <td>${grandTotal}</td>
                     <td>Obtained Total</td>
                     <td>${obtainedTotal}</td>

                 </tr>
                   
                   <tr>
                     <td>Over All Percentage</td>
                     <td>${overallPercentage}</td>
                     <td>Overall Grade</td>
                     <td>${overallGrade}</td>

                 </tr>

                 <tr>
                     <td>Final Status</td>
                     <td colspan = '3' class= "${overallStatus === 'PASS' ? 'pass' : 'fail'}">${overallStatus}</td>
                   
                 </tr>
             
             </table>

        </div>
  
  `)