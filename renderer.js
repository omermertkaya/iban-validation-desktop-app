// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// Requirements
const ibantools = require('ibantools');
const ExcelJS = require('exceljs');
const percent = require("percent-value");
const ibanBankCode = require('./ibanBankCode.js')



var selectedFileLocation,exportLocation





// File Inputing from index.html 

const fileInput = document.getElementById('file-selector');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  selectedFileLocation = selectedFile.path
  console.log('Secilen dosya yolu: ' + selectedFileLocation)
  var compLocationForExport = selectedFileLocation.split('\\')
  var sliceLocationForExport = compLocationForExport.slice(0, -1)
  exportLocation = sliceLocationForExport.join('\\')


}




function getData(){




    var progress_bar = document.getElementById("progress-bar")


    window.console = {
        log: function(str){
          var node = document.createElement('div');
          node.className = "commandLine"
          node.appendChild(document.createTextNode(str));
          document.getElementById("myLog").appendChild(node);
        }
      }
    function submitPoll() {
        // Progress bar set zero.
        // Starting button with app
        progress_bar.innerHTML = "0%";
        progress_bar.style.width = "0%";
        document.getElementById("btn1").disabled = true;
    }
    document.getElementById("btn1").addEventListener("click", submitPoll);


    


    console.log('App is starting. Please wait.')


    var iban_ulke_kodu = 'TR' 

    
    
    //Read a file
    var workbook = new ExcelJS.Workbook();
    workbook.xlsx.readFile(selectedFileLocation).then(function () {
    
        //Get sheet by Name
        var worksheet=workbook.getWorksheet('Sheet1');
    
        //Get Lastrow
        var lastRow = worksheet.lastRow
        
        worksheet.eachRow(function(row, rowNumber) {

            
            if(rowNumber == 1){
                // First Row is a table header. 
                progress_bar.innerHTML = percent(rowNumber).of(lastRow.number) + "%";
                progress_bar.style.width = percent(rowNumber).of(lastRow.number) + "%";

            }else{

                // Other row is starting here.

                progress_bar.innerHTML = percent(rowNumber).of(lastRow.number) + "%";
                progress_bar.style.width = percent(rowNumber).of(lastRow.number) + "%";
                
                console.log(percent(rowNumber).of(lastRow.number) + '%');
                console.log('Row number is ' +rowNumber)
                var kullaniciBilgisi = row.values
                var kullaniciIban = kullaniciBilgisi[4]
                const iban = kullaniciIban; 
    
    
                if(iban.substring(0,2) == iban_ulke_kodu){

                        if(ibantools.validateIBAN(iban).valid == true){
                            // console.log('IBAN Numarasi gecerlidir.')

                            var ibanCode = iban.substring(4,9)
                            console.log(ibanCode)
                        
                            row.getCell(5).value = ibanBankCode.findIbanBankCode(ibanCode).bankName
                            row.getCell(6).value = 'True';
                            row.commit();
                            
                        }else{
           
                            row.getCell(6).value = 'False';
                            row.getCell(7).value = ibantools.validateIBAN(iban).errorCodes;
                            row.commit();
                        }
    
    
                }else{
           
                    row.getCell(5).value = 'False';
                    row.getCell(6).value = 'Country code is false.';
                    row.commit();
                }


       
            }
            if(rowNumber == lastRow.number){
                console.log('Export file location is ' + exportLocation)
                console.log('All Done.')
                document.getElementById("btn1").disabled = false;

            }

    
    
    
        });

        return workbook.xlsx.writeFile(exportLocation+ "\\export.xlsx");
    
    });
    
    
    
    
    
    


    
}