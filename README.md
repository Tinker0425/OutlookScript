# OutlookScript
Google app script for google sheet. It copies and pastes useful information from one sheet to another, based on years the user selects.

How to Run the Outlook Script to update:

1. Open “Sea Ice Freeze-Up/Break-Up Dates 1998-Present” Google sheet while logged into ASIP gmail account
2. Go to the sheet you want to update (i.e. Summer_North)
3. Input the 5 years you want at the top
4. Click “Run Script” -> Pick from drop down the one you want (i.e. Summer_North)
5. Banner will say “Finished Script” when complete

*Please verify information and let me know if you find any bugs.
Limitation - Only works for 5 years at this time; Need ALL 5 years listed, even if not using 5






How to Adjust the Outlook JavaScript:

“Extensions” Tab -> Apps Script. This will open a new tab with the script
Because there are a different number of rows for each Summer/Winter, I made three functions labeled “Summer_North”, “Summer_South”, and “Winter”
The start/end rows for each sea is a constant, so you will see values like:
  const b_retreat_row = 14; #This is where the row starts
  const b_retreat_row_count = 15; #This is how many from the start of the row to the end
Thus, if you change the number of rows, you will need to change these values to match
If you want to add another column, change:
  for (var i=2; i<7; i++){
Change the i<7 value. If you have 6 columns, change it to i<8


