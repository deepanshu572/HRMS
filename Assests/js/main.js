

var mnu = document.querySelector(".i1");
var close = document.querySelector(".i2");
var nav = document.querySelector(".resp-nav");
var nav2 = document.querySelector(".tab-papa");
// width: 637px;

mnu.addEventListener("click", function(){
nav.style.left = "-232px";
nav2.style.width = "0px";


})
close.addEventListener("click", function(){
nav.style.left = "0%";
nav2.style.width = "258px";

})


function retrieveFormData(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form element
    var form = document.getElementById('myForm');

    // Get values of input fields
    var userId = form.elements['login'].value; // Corrected from 'userId' to 'login'
    var password = form.elements['password'].value;

    // Display or process the retrieved data
    console.log('User ID:', userId);
    console.log('Password:', password);


    if (userId == "Hr" || password == "Hr" ) {
        window.location.href = "../HR/hr.php";
    }
   else if (userId == "company" || password == "company" ) {
        window.location.href = "../COMPANY/Co.php";
    }
   else if (userId == "super" || password == "super" ) {
        window.location.href = "../ADMIN/SUPER.php";
    }
    else{
console.log("error");
    }

}





function Hremployee() {

    const data1 = [
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} ,
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} ,
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} ,
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} ,
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} ,
        { "Name" : "Name" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Startdate" : "<div class='page-show'><div class='page-td'><button>Profile</button></div></div>"} 
        
    ];

    function addData1() {

        data1.map( item => {

            table1.row
            .add([
                item.Name,
                item.Position,
                item.Office,
                item.Age,
                item.Startdate,
                item.Salary
            ])
            .draw(false);
            
        });
     
    }
     
    const table1 = new DataTable('#Employee');
    
    addData1();
}

function AllNotification() {
    const data2 = [
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} ,
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} ,
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} ,
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} ,
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} ,
        { "input" : "<input type='checkbox'>" , "Position" : "Position" , "Office" : "Office" , "Age" : "23" , "Designation" : "Post" , "Dor": "26:12:2005"} 
        
    ];

    function addData2() {

        data2.map( item => {

            table2.row
            .add([
                item.input,
                item.Position,
                item.Office,
                item.Age,
                item.Designation,
                item.Dor
            ])
            .draw(false);
            
        });
     
    }
     
    const table2 = new DataTable('#Employee2');
    
    addData2();
}
function AllTicket() {
    const data3 = [
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Pending"} ,
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Pending"} ,
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Pending"} ,
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Complete"} ,
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Complete"} ,
        { "Date" : "26:12:2005" , "Name" : "Deepanshu" , "Task" : "Task" , "PDF" : "<div class='page-show'><div class='page-td'><button>image</button></div></div>" , "View" : "<div class='page-show'><div class='page-td'><a href='Message.php'><button>View</button></a></div></div>" , "Status": "Complete"} 
        
    ];

    function addData3() {

        data3.map( item => {

            table3.row
            .add([
                item.Date,
                item.Name,
                item.Task,
                item.PDF,
                item.View,
                item.Status
            ])
            .draw(false);
            
        });
     
    }
     
    const table3 = new DataTable('#Employee3');
    
    addData3();
}
function UploadDocument() {
    const data4 = [
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} ,
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} ,
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} ,
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} ,
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} ,
        { "Employee" : "26:12:2005" , "Name" : "Deepanshu", "Salary" : "<div class='select-slip'> <button> + Salary Slip</button><small>after month new file replace old file</small> </div>" , "Document" : " <input type='file' class='doc'>   <button> + Document</button><select><option value='Select'>Select</option><option value='Passport copy'>Passport copy</option><option value='Visa id'>Visa id</option><option value='Emigrant Id'>Emigrant Id</option></select><button class='button-upload'>Upload</button>"} 
        
    ];

    function addData4() {

        data4.map( item => {

            table4.row
            .add([
                item.Employee,
                item.Name,
                item.Salary,
                item.Document
            ])
            .draw(false);
            
        });
     
    }
     
    const table4 = new DataTable('#Employee4');
    
    addData4();
}
function GraphRating() {
    const data_update1 = [
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div rate-div-star'> <span><p>★</p> <p>40%</p></span> <span><p>★★</p> <p>40%</p></span> <span><p>★★★</p> <p>40%</p></span><span><p>★★★★</p> <p>40%</p> </span><span><p>★★★★★</p> <p>40%</p></span> </div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div rate-div-star'> <span><p>★</p> <p>40%</p></span> <span><p>★★</p> <p>40%</p></span> <span><p>★★★</p> <p>40%</p></span><span><p>★★★★</p> <p>40%</p> </span><span><p>★★★★★</p> <p>40%</p></span> </div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div rate-div-star'> <span><p>★</p> <p>40%</p></span> <span><p>★★</p> <p>40%</p></span> <span><p>★★★</p> <p>40%</p></span><span><p>★★★★</p> <p>40%</p> </span><span><p>★★★★★</p> <p>40%</p></span> </div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div rate-div-star'> <span><p>★</p> <p>40%</p></span> <span><p>★★</p> <p>40%</p></span> <span><p>★★★</p> <p>40%</p></span><span><p>★★★★</p> <p>40%</p> </span><span><p>★★★★★</p> <p>40%</p></span> </div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div'> <span><p>Yes</p> <p>50%</p></span> <span><p>No</p> <p>40%</p></span></div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div'> <span><p>Yes</p> <p>50%</p></span> <span><p>No</p> <p>40%</p></span></div>"} ,
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div'> <span><p>😀 Happy </p> <p>60%</p></span> <span><p> 😒 Sad</p> <p>40%</p></span></div>"} ,         
        { "code" : "#Adfer" , "Rating" : "<div class='rate-div'> <span><p>😀 Happy </p> <p>60%</p></span> <span><p> 😒 Sad</p> <p>40%</p></span></div>"} 
                   
    ];

    function add_update() {
        
        data_update1.map( item => {

            table_update.row
            .add([
                item.code,
                item.Rating
            ])
            .draw(false);
            
        });
    }
     
    const table_update = new DataTable('#Employee-graph');
    
    add_update();
}



//  comapny page js //  comapny page js//  comapny page js//  comapny page js


function AddHr() {
    const data5 = [
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "1", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-green'><div class='page-td'><button>Enable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} ,
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "2", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-orange'><div class='page-td'><button>Disable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} ,
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "3", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-green'><div class='page-td'><button>Enable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} ,
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "4", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-orange'><div class='page-td'><button>Disable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} ,
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "5", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-green'><div class='page-td'><button>Enable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} ,
        { "Task" : "<select><option value='Complaint'>Complaint</option><option value='Salary'>Salary</option><option value='Leave'>Leave</option><option value='Food'>Food</option></select>" , "id" : "6", "name" : "Deepanshu" , "password" : "<p> ID: skoeuf6543 <br>Password: skoeuf65</p>" , "btns" : "<div class='page-show page-show-orange'><div class='page-td'><button>Disable</button></div></div>", "Delete":"<div class='page-show'><div class='page-td'><button>Delete</button></div></div>"} 
    ];

    function addData5() {

        data5.map( item => {

            table5.row
            .add([
                item.Task,
                item.id,
                item.name,
                item.password,
                item.btns,
                item.Delete
            ])
            .draw(false);
            
        });
     
    }
     
    const table5 = new DataTable('#Employee5');
    
    addData5();
}

function EmployeeData() {
    const data6 = [
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} ,
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} ,
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} ,
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} ,
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} ,
        { "Employee" : "12" , "name" : "Deepanshu", "Passport" : "2080", "Dor" :"26/12/2005", "space" : "<div class='page-show'><div class='page-td'><a href='Profile.php'><button>Profile</button></a></div><div class='page-td'><button>EXPORT</button></div></div>"} 
    ];

    function addData6() {

        data6.map( item => {

            table6.row
            .add([
                item.Employee,
                item.name,
                item.Passport,
                item.Dor,
                item.space
            ])
            .draw(false);
            
        });
     
    }
     
    const table6 = new DataTable('#Employee6');
    
    addData6();
}
function TicketData() {

    const data7 = [
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} ,
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} ,
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} ,
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} ,
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} ,
        { "SN" : "1" , "Date" : "9/12/2005", "Name" : "Deepanshu", "Task" : "Tasks", "PDF" :"<div class='page-show'><div class='page-td'><button>Image</button></div></div>", "View":"<div class='page-show'><div class='page-td'><button>View</button></div></div>", "Status":"<select><option value='Pending'>Pending</option><option value='In process'>In process</option><option value='Complete'>Complete</option></select>"} 
    ];

    function addData7() {

        data7.map( item => {

            table7.row
            .add([
                item.SN,
                item.Date,
                item.Name,
                item.Task,
                item.PDF,
                item.View,
                item.Status
            ])
            .draw(false);
            
        });
     
    }
     
    const table7 = new DataTable('#Employee7');
    
    addData7();
}


//  function Recharge(){
//     rechargearray = [
//         {
//           "DateExp": "hello",
//           "days": "hh",
//           "price":"udj"  
//         },
       
//     ];
//     var rechargedata = document.getElementById('Recharge');
//     rechargearray.map(detail =>{
//         rechargedata.innerHTML +=`
//                         <div class="recharge1">
//                            <h3>Current plan</h3>
//                            <div class="re1">
//                             <span class="span1">
//                              <p>Days</p>
//                              <input type="text" value="${detail.days}" disabled></span>
//                             <span class="span2"> 
//                              <p> Amount </p> 
//                              <input type="text" value="${detail.price}" disabled>
//                          </span>
//                          <span class="span3">
//                               <p>Date of exp.</p>
//                              <input type="text" value="${detail.DateExp}" disabled>
//                          </span>
//                          </div>
//                          <button class="res-btn1">Renew Now</button>
                            
                            
//                           </div>

//          `
         
//     });
//  };
//  comapny page js//  comapny page js//  comapny page js//  comapny page js


//  SuperAdmin page js//  SuperAdmin page js//  SuperAdmin page js//  SuperAdmin page js

function AddCompany() {

    const data8 = [
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} ,
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} ,
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} ,
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} ,
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} ,
        { "SN" : "<input type='checkbox'>" , "code" : "533281", "Company" : "Company", "ID" : "1", "Password" :"password@123", "Plan":"A", "EditDelete":"<div class='tinder'><a href='EditCompany.php'><button>Edit</button></a><a href='EmployeeData.php'><button class='red'>Employe</button></a></div>", "EnableDisable": " <div class='tinder2'><div class='tinder3'><button>Enable</button><button>Delete</button></div> <div class='tinder3'><a href='ProfileCompany.php'><button>Profile</button></a><button>Recharge</button></div></div>"} 
    ];

    function addData8() {

        data8.map( item => {

            table8.row
            .add([
                item.SN,
                item.code,
                item.Company,
                item.ID,
                item.Password,
                item.Plan,
                item.EditDelete,
                item.EnableDisable
            ])
            .draw(false);
            
        });
     
    }
     
    const table8 = new DataTable('#Employee8');
    
    addData8();
}
function CompanyEmployee() {

    const data9 = [
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} ,
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} ,
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} ,
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} ,
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} ,
        { "ID" : "1" , "Name" : "Deepanshu", "Contact" : "7903737980", "Passport" : "Passport"} 
    ];

    function addData9() {

        data9.map( item => {

            table9.row
            .add([
                item.ID,
                item.Name,
                item.Contact,
                item.Passport
            ])
            .draw(false);
            
        });
     
    }
     
    const table9 = new DataTable('#Employee9');
    
    addData9();
}
function EmployeeList() {

    const data10 = [
        { "Sno" : "1" , "ID" : "1", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} ,
        { "Sno" : "1" , "ID" : "2", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} ,
        { "Sno" : "1" , "ID" : "3", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} ,
        { "Sno" : "1" , "ID" : "4", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} ,
        { "Sno" : "1" , "ID" : "5", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} ,
        { "Sno" : "1" , "ID" : "6", "Name" : "Deepanshu", "Passport" : "Passport", "DOR" : "DOR"} 
    ];

    function addData10() {

        data10.map( item => {

            table10.row
            .add([
                item.Sno,
                item.ID,
                item.Name,
                item.Passport,
                item.DOR
            ])
            .draw(false);
            
        });
     
    }
     
    const table10 = new DataTable('#Employee10');
    
    addData10();
}

//  SuperAdmin page js//  SuperAdmin page js//  SuperAdmin page js//  SuperAdmin page js







// function details() {
//     const viewdetails = [
//         {"id" : 1 , "senderid":1 ,"sendername":"Amit" ,     "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hii"},
//         {"id" : 2 , "senderid":1 ,"sendername":"Amit" ,     "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hello"},
//         {"id" : 3 , "senderid":2 ,"sendername":"Deepanshu", "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":1, "recivername":"Amit"      ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hello"},
//         {"id" : 4 , "senderid":2 ,"sendername":"Deepanshu" ,"senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":1, "recivername":"Amit"      ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Kyabaat?"},
//         {"id" : 5 , "senderid":1 ,"sendername":"Amit" ,     "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":1, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "kuch nhi"},
//         {"id" : 6 , "senderid":1 ,"sendername":"Amit" ,    "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":1, "recivername":"Deepanshu"  ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "thik ha"}
//     ]
//       var data = document.getElementById("messagedata");

//     viewdetails.map(detail =>{
//         console.log(detail);

//           if(detail.senderid = 1){
//             data.innerHTML(`
//                 <div class="sem2">
//                     <div class="circle"><img src="${detail.senderimg}" alt="" /></div>
//                     <div class="rectangle"><p>${detail.msg}</p></div>
//                 </div>
//            `) 
//             }
//             else{
//                 data.innerHTML(`<div class="sem2-main">
//                     <div class="circle"><img src="${detail.reciverimg}" alt="" /></div>
//                     <div class="rectangle"><p>${detail.msg}</p></div>
//                 </div>`)
//             }
           
        
//     });

//       alert();
// }



function plans(){
    plan_data = [
        {
          "name": "Plan-A" ,
          "days": "30day's",
          "price":"2 Aed/hr"  
        },
        {
          "name": "Plan-A" ,
          "days": "30day's",
          "price":"2 Aed/hr"  
        },
        {
          "name": "Plan-A" ,
          "days": "30day's",
          "price":"2 Aed/hr"  
        },
    ];
    var plan = document.getElementById('plans');
    plan_data.map(detail =>{
        plan.innerHTML +=`
        <div class="plan1">
                        <h2>${detail.name}</h2>
                        <span> <p>  Day’s</p> <p> ${detail.days}</p> </span>
                        <span>   <p>  Price/Download</p> <p>${detail.price}</p> </span>
                        <button>Delete</button>
                        </div>

         `
         
    }) 
}


function details() {
    const viewdetails = [
        {"id" : 1 , "senderid":2 ,"sendername":"Amit" , "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hii"},
        {"id" : 2 , "senderid":1 ,"sendername":"Amit" , "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hello"},
        {"id" : 3 , "senderid":2 ,"sendername":"Deepanshu", "senderimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg", "reciverid":1, "recivername":"Amit" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Hello"},
        {"id" : 4 , "senderid":2 ,"sendername":"Deepanshu" ,"senderimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg", "reciverid":1, "recivername":"Amit" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "Kyabaat?"},
        {"id" : 5 , "senderid":1 ,"sendername":"Amit" , "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "kuch nhi"},
        {"id" : 6 , "senderid":1 ,"sendername":"Amit" , "senderimg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s", "reciverid":2, "recivername":"Deepanshu" ,"reciverimg":"https://i.pinimg.com/564x/de/6e/8d/de6e8d53598eecfb6a2d86919b267791.jpg" ,"msg" : "thik ha"}
    ];

    const loginId = 1 ;
    
    var data = document.getElementById("messagedata");

    // if (data) {
        viewdetails.map(detail => {
            console.log(detail);
            
            if (detail.senderid === 1) {
                data.innerHTML += `
                    <div class="sem2">
                        <div class="circle"><img src="${detail.senderimg}" alt="" /></div>
                        <div class="rectangle"><p>${detail.msg}</p></div>
                    </div>
                `;
            } else {
                data.innerHTML += `
                    <div class="sem2-main">
                        <div class="circle"><img src="${detail.reciverimg}" alt="" /></div>
                        <div class="rectangle"><p>${detail.msg}</p></div>
                    </div>
                `;
            }
        });
    // } else {
    //     console.error("Element with id 'messagedata' not found.");
    // }
}

function createData(){

////  First SELECT BOX /////

    createdata1 = [
        {
           "option1":"Select Company code", "option2" : "Ftydd7", "option3" : "Ftydd7", "option4" : "Ftydd7", "option5" : "Ftydd7"
           
        },
    ];
    var datacode1 = document.getElementById('select1');
    createdata1.map(detail =>{
         datacode1.innerHTML +=`
                     <select>
                        <option value="${detail.option1}">${detail.option1} </option>
                        <option value="${detail.option2}">${detail.option2} </option>
                        <option value="${detail.option3}">${detail.option3} </option>
                        <option value="${detail.option4}">${detail.option4} </option>
                        <option value="${detail.option5}">${detail.option5} </option>
                      </select>

         `
         
    }) 

////  First SELECT BOX /////





////  Second input BOX /////

    createdata2 = [
        {
          "code": "GTSdhdhd888"
           
        },
    ];
    var inp_data = document.getElementById('input_item');
    createdata2.map(detail1 =>{
        inp_data.innerHTML +=`
       <input type="text" value="${detail1.code}" readonly> 
         `
         
    }) 

////  Second input BOX /////





 ////  Third SELECT BOX /////

    createdata3 = [
        {
           "option1":"Select Category",
           "option2" : "SALARY",
            "option3" : "LEAVE",
            "option4" : "FOOD",
            "option5" : "NEW JOINEE",
           "option6":"PPE",
           "option7" : "TRANSPORT",
            "option8" : "Lost & Found",
            "option9" : "CAMP",
            "option10" : "DOCUMENTS"
           
        },
    ];
    var datacode2 = document.getElementById('select2');
    createdata3.map(detail =>{
         datacode2.innerHTML +=`
                     <select>
                        <option value="${detail.option1}">${detail.option1} </option>
                        <option value="${detail.option2}">${detail.option2} </option>
                        <option value="${detail.option3}">${detail.option3} </option>
                        <option value="${detail.option4}">${detail.option4} </option>
                        <option value="${detail.option5}">${detail.option5} </option>
                        <option value="${detail.option6}">${detail.option6} </option>
                        <option value="${detail.option7}">${detail.option7} </option>
                        <option value="${detail.option8}">${detail.option8} </option>
                        <option value="${detail.option9}">${detail.option9} </option>
                        <option value="${detail.option10}">${detail.option10} </option>
                      </select>
                       
         `
         
    }) 

////  Third SELECT BOX /////






////  fourth SELECT BOX /////

createdata4 = [
    {
       "option1":"Select complaint",
       "option2" : "SALARY DEDUCTION.",
        "option3" : "HOLD SALARY RELEASE",
        "option4" : "SALARY INCREMENT",
        "option5" : "SALARY ADVANCE",
       "option6":"LOAN AGAINST SALARY",
       
    },
];
    
    var datacode3 = document.getElementById('select3');
    createdata4.map(detail =>{
         datacode3.innerHTML +=`
                     <select>
                        <option value="${detail.option1}">${detail.option1} </option>
                        <option value="${detail.option2}">${detail.option2} </option>
                        <option value="${detail.option3}">${detail.option3} </option>
                        <option value="${detail.option4}">${detail.option4} </option>
                        <option value="${detail.option5}">${detail.option5} </option>
                      </select>

         `
         
    }) 
////  fourth SELECT BOX /////





////  Fifth SELECT BOX /////

    createdata5 = [
        {
            "option1":"Select an option",
            "option2" : "FROM - TO (DATE)",
             "option3" : "Amt/hrs",
             "option4" : "Colour",
             "option5" : "SIZE ( X,L)",
            "option6":"Qty",
            
         },
    ];
    var datacode4 = document.getElementById('select4');
    createdata5.map(detail =>{
         datacode4.innerHTML +=`
                     <select>
                        <option value="${detail.option1}">${detail.option1} </option>
                        <option value="${detail.option2}">${detail.option2} </option>
                        <option value="${detail.option3}">${detail.option3} </option>
                        <option value="${detail.option4}">${detail.option4} </option>
                        <option value="${detail.option5}">${detail.option5} </option>
                        <option value="${detail.option6}">${detail.option6} </option>
                      </select>

         `
         
    }) 

////  fifth SELECT BOX /////


}

function companycode(){
    catdata2 = [
        {
           "name":"Company Name", "code" : "Ftydd7"
        },
    ];
    var datacode = document.getElementById('codeCompany');
    catdata2.map(detail =>{
         datacode.innerHTML +=`
                     <span>
                        <p>Company Code</p>
                        <input type="text" value="${detail.code}" >
                      </span>
                      <hr>
                      <span>
                        <p>Company</p>
                        <input type="text" value="${detail.name}" >
                      </span>

         `
         
    }) 
}
function categorydata(){
    catdata1 = [
        {
          "name":"salary"
        },
        {
           "name":"LEAVE"
        },
        {
           "name":"Food"
        },
        {
          "name":"NEW JOINEE"
        },
        {
           "name":"PPE"
        },
        {
           "name":"TRANSPORT"
        },
        {
            "name":"LOST & FOUND"
        },
        {
            "name":"CAMP"
        },
        {
           "name":"DOCUMENTS"
        },
        {
            "name":"CLEARENCES"
        },
        {
          "name":"MEDICAL"
        },
        {
           "name":"ASSESMENT"
        },
        {
            "name":"SITE"
        },
    ];
    var dataprint = document.getElementById('catdata1');
    catdata1.map(detail =>{
         dataprint.innerHTML +=`
            <span>
             <input type='radio' name='category' id='${detail.name}' value='${detail.name}' >
             <label for='${detail.name}'>  ${detail.name}</label>
             </span>
         `
         
    })
}
function categorydata_edit(){
    catdata2 = [
        {
          "name":"SALARY DEDUCTION."
        },
        {
           "name":"EDIT DELETE"
        },
        {
           "name":"HOLD SALARY RELEASE."
        },
        {
          "name":"SALARY INCREMENT"
        },
        {
           "name":"SALARY ADVANCE"
        },
        {
           "name":"LOAN AGAINST SALARY"
        },
        {
            "name":"PPE AMOUNT DEDUCTION"
        },
        {
            "name":"OVERTIME DEDUCTION"
        },
        {
           "name":"OVERTIME NOT RECEIVED"
        },
        {
            "name":"CHANGE STATUS DEDUCTION"
        },
        {
          "name":"WARNING LETTER DEDUCTION"
        },
        {
           "name":"WARNING LETTER DEDUCTION"
        },
        {
            "name":"WARNING LETTER DEDUCTION"
        }
    ];
    var dataprint2 = document.getElementById('catdata2');
    catdata2.map(detail =>{
         dataprint2.innerHTML +=`
           <span> 
           <p>${detail.name}</p>
          <div>
            <button class="edit">EDIT</button>
             <button class="delete">DELETE</button>
             </div> 
          </span>

         `
         
    })
}
function categorydata_btnoption(){
    catdata3 = [
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
        {
          "name":"Colour"
        },
       
    ];
    var dataprint3 = document.getElementById('catdata3');
    catdata3.map(detail =>{
         console.log(detail);
         dataprint3.innerHTML +=`
          <input type="text" value="${detail.name}" readonly="">
         `
         
    })
}