function onOpen() {
  SpreadsheetApp.getUi().createMenu("Run Script").addItem("Update Summer North", "SummerNorth").addItem("Update Summer South", "SummerSouth").addItem("Update Winter", "Winter").addToUi();
}


function getColumnWithHeader(year_range,sheet) {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
  var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; // get values of header row
  var column = -1; // initialize column variable
  
  // loop through header row to find column with header "2022"
  for (var i = 0; i < headerRow.length; i++) {
    if (headerRow[i] == year_range) {
      column = i + 1; // set column variable to column number (add 1 because arrays are 0-indexed)
      break;
    }
  }
  
  return column; // return column number (-1 if header not found)
};


function updateSpreadSheet(year_column, retreat_row, retreat_row_count, update_row, sea_sheet, updatesheet){
  var year = updatesheet.getRange(1,year_column).getValue();
  var year_min = year-1;
  var year_range = year_min + "-" + year;

  var data_column = getColumnWithHeader(year_range,sea_sheet);// sheetnames[0] // sheetnames

  var sea_values = sea_sheet.getRange(retreat_row,data_column,retreat_row_count).getValues();
  var vA=sea_values.map(function(r){return r[0];});
  var vD=[];
  vA.forEach(function(e){
    if(e){
      vD.push([Utilities.formatDate(new Date(e), SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone(), "MM/dd")])
    } else{
      vD.push(["0"])
    };
  });
  updatesheet.getRange(update_row,year_column,retreat_row_count).setValues(vD);

};


function SummerNorth() {

  sheetnames = ["Beaufort", "Chukchi"]
  const b_retreat_row = 14;
  const b_retreat_row_count = 15;
  const b_update_row = 25;
  const c_retreat_row = 31;
  const c_retreat_row_count = 21;
  const c_update_row = 3;

  var b_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[0]);
  var c_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[1]);
  var updatesheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summer_North");

  for (var i=2; i<7; i++){
    updateSpreadSheet(i, c_retreat_row, c_retreat_row_count, c_update_row, c_sheet, updatesheet);
    updateSpreadSheet(i, b_retreat_row, b_retreat_row_count, b_update_row, b_sheet, updatesheet);    
  };

};


function SummerSouth() {

  sheetnames = ["Bering", "Cook"]
  const b_retreat_row = 29;
  const b_retreat_row_count = 39;
  const b_update_row = 3;
  const c_retreat_row = 25;
  const c_retreat_row_count = 9;
  const c_update_row = 43;

  var b_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[0]);
  var c_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[1]);
  var updatesheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summer_South");

  for (var i=2; i<7; i++){
    updateSpreadSheet(i, b_retreat_row, b_retreat_row_count, b_update_row, b_sheet, updatesheet); 
    updateSpreadSheet(i, c_retreat_row, c_retreat_row_count, c_update_row, c_sheet, updatesheet);
  };
}

function Winter() {

  sheetnames = ["Beaufort", "Bering", "Chukchi","Cook"];
  const bf_extent_row = 3; 
  const bf_extent_row_count = 7;
  const bf_update_row = 3;
  const bg_extent_row = 3;
  const bg_extent_row_count = 21;
  const bg_update_row = 34;
  const ch_extent_row = 3;
  const ch_extent_row_count = 22;
  const ch_update_row = 11;
  const co_extent_row = 2;
  const co_extent_row_count = 11;
  const co_update_row = 56;

  var bf_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[0]);
  var bg_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[1]);
  var ch_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[2]);
  var co_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnames[3]);
  var updatesheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Winter");

  for (var i=2; i<7; i++){
    updateSpreadSheet(i, bf_extent_row, bf_extent_row_count, bf_update_row, bf_sheet, updatesheet); 
    updateSpreadSheet(i, bg_extent_row, bg_extent_row_count, bg_update_row, bg_sheet, updatesheet);
    updateSpreadSheet(i, ch_extent_row, ch_extent_row_count, ch_update_row, ch_sheet, updatesheet); 
    updateSpreadSheet(i, co_extent_row, co_extent_row_count, co_update_row, co_sheet, updatesheet);
  };
};

