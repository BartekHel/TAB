import React from 'react'
import '../css/ManagerPage.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ManagerPage = () => {
    const [showAddEmployee, setShowAddEmployee] = React.useState(false);
    const employees = [
        { name: 'John Doe', email: 'john.doe@example.com', earnings: 1000.50 },
        { name: 'Jane Smith', email: 'jane.smith@example.com', earnings: 1500.75 },
        { name: 'Michael Johnson', email: 'michael.johnson@example.com', earnings: 2000.25 },
        { name: 'Emily Davis', email: 'emily.davis@example.com', earnings: 1800.00 },
        { name: 'David Wilson', email: 'david.wilson@example.com', earnings: 2200.50 },
        { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', earnings: 2500.75 },
        { name: 'James Brown', email: 'james.brown@example.com', earnings: 1900.25 },
        { name: 'Sophia Miller', email: 'sophia.miller@example.com', earnings: 2100.00 },
        { name: 'Daniel Anderson', email: 'daniel.anderson@example.com', earnings: 2300.50 },
        { name: 'Ava Thomas', email: 'ava.thomas@example.com', earnings: 2700.75 },

        { name: 'John Doe', email: 'john.doe@example.com', earnings: 1000.50 },
        { name: 'Jane Smith', email: 'jane.smith@example.com', earnings: 1500.75 },
        { name: 'Michael Johnson', email: 'michael.johnson@example.com', earnings: 2000.25 },
        { name: 'Emily Davis', email: 'emily.davis@example.com', earnings: 1800.00 },
        { name: 'David Wilson', email: 'david.wilson@example.com', earnings: 2200.50 },
        { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', earnings: 2500.75 },
        { name: 'James Brown', email: 'james.brown@example.com', earnings: 1900.25 },
        { name: 'Sophia Miller', email: 'sophia.miller@example.com', earnings: 2100.00 },
        { name: 'Daniel Anderson', email: 'daniel.anderson@example.com', earnings: 2300.50 },
        { name: 'Ava Thomas', email: 'ava.thomas@example.com', earnings: 2700.75 },

        { name: 'John Doe', email: 'john.doe@example.com', earnings: 1000.50 },
        { name: 'Jane Smith', email: 'jane.smith@example.com', earnings: 1500.75 },
        { name: 'Michael Johnson', email: 'michael.johnson@example.com', earnings: 2000.25 },
        { name: 'Emily Davis', email: 'emily.davis@example.com', earnings: 1800.00 },
        { name: 'David Wilson', email: 'david.wilson@example.com', earnings: 2200.50 },
        { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', earnings: 2500.75 },
        { name: 'James Brown', email: 'james.brown@example.com', earnings: 1900.25 },
        { name: 'Sophia Miller', email: 'sophia.miller@example.com', earnings: 2100.00 },
        { name: 'Daniel Anderson', email: 'daniel.anderson@example.com', earnings: 2300.50 },
        { name: 'Ava Thomas', email: 'ava.thomas@example.com', earnings: 2700.75 },

        { name: 'John Doe', email: 'john.doe@example.com', earnings: 1000.50 },
        { name: 'Jane Smith', email: 'jane.smith@example.com', earnings: 1500.75 },
        { name: 'Michael Johnson', email: 'michael.johnson@example.com', earnings: 2000.25 },
        { name: 'Emily Davis', email: 'emily.davis@example.com', earnings: 1800.00 },
        { name: 'David Wilson', email: 'david.wilson@example.com', earnings: 2200.50 },
        { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', earnings: 2500.75 },
        { name: 'James Brown', email: 'james.brown@example.com', earnings: 1900.25 },
        { name: 'Sophia Miller', email: 'sophia.miller@example.com', earnings: 2100.00 },
        { name: 'Daniel Anderson', email: 'daniel.anderson@example.com', earnings: 2300.50 },
        { name: 'Ava Thomas', email: 'ava.thomas@example.com', earnings: 2700.75 },
        
    ];


    const handleDownloadRaport = () => {
        const input = document.getElementById("Report");
    
        html2canvas(input!, { logging: true, useCORS: true, scale: 2 }).then(canvas => {
            const imgWidth = 210;
            const pageHeight = 295; // Height of an A4 page in mm (210mm x 297mm, leaving some margin)
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL("image/png", 1.0);
            const pdf = new jsPDF('p', 'mm', 'a4');
            let position = 0;
    
            if (imgHeight <= pageHeight) {
                // If the content fits on one page
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            } else {
                // If the content is too large, split it into multiple pages
                let remainingHeight = imgHeight;
                while (remainingHeight > 0) {
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    remainingHeight -= pageHeight;
                    position -= pageHeight; // Move position up for the next page
                    if (remainingHeight > 0) {
                        pdf.addPage();
                    }
                }
            }
    
            pdf.save('raport.pdf');
        });
    }
    

    // const handleDownloadRaport = () => {
    //     const input=document.getElementById("Report");
    //           html2canvas(input!,{logging:true,useCORS:true,scale:2}).then(canvas=>{
    //               const imgWidth=210;
    //               const imgHeight=canvas.height*imgWidth/canvas.width;
    //               const imgData=canvas.toDataURL("image/png",1.0);
    //               const pdf=new jsPDF('p','mm','a4');
    //               pdf.addImage(imgData,'PNG',0,0,imgWidth,imgHeight);
    //               pdf.save('raport.pdf');
    //           })
    // }

    return (
        <div className='wrapper'>
            <div className='inside-wrapper'>
                <h5>Manager Page</h5>

                <button id='downloadButton' onClick={handleDownloadRaport}>Download Report</button>

                <div id='Report'>
                <div className='employeePanel'>
                   <div className='employeeLabel'>
                    <p>Employee</p>
                    <p>Earnings</p>
                    </div>
                <div className='employeeList'>
                    {employees.map((employee, index) => (
                        <div  key={index}>
                            <p>{employee.name}</p>
                            <p>{employee.email}</p>
                            <p>{employee.earnings}$</p>
                        </div>
                    ))}
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerPage