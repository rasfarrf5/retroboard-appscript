# appscript-retroboard

This is new retroboard developed using Google App Script and Google Sheet to store retro items.

## Steps:

1. Create new folder in Google Drive and create `Google Sheet` and `App Script` file into the folder.
2. Open Google Sheet and add 2 sheets
   2.1 First Sheet name as `retrospective` to store ongoing retro items.
   2.2 Second Sheet name as `config` to store retrospective sprint value.
   2.3 Attached sample excel sheet in the demo folder with name `retro-clasp.xlsx` for reference.
3. Open App Script file and you should see App Script Editor
   3.1 For Clasp support
    - Checkout this repo and config your clasp.json ID and push it directly.
   3.2 For Manual
    - Create files as same name as in the repo and copy paste the src.
    - Make sure you didn't missed any files or content from src.
4. Open Google Sheet file which you already created in Step 1 and copy url & replace it with `YOUR_GOOGLE_SHEET_URL` in
   configuration file.
5. Finally you need to deploy as Web App by
   5.1 Click on `Deploy` button from App Script editor and Select `New Deployment`
   5.2 Type your `Description`
   5.3 Choose `Execute as` with your email id (To avoid others permission to view)
   5.4 Choose `Who has access` based on your requirement in my case `Anyone with Google Account`
   5.5 Finally click `Deploy` button
6. After deploy button click this will generate web app and show your retroboard url.
7. Copy that url and share with your team and start your retroboard.

Demo:
| Screen 1 | Screen 2 |
| --- | --- |
|![Screen 1](https://github.com/rasfarrf5/retroboard-appscript/blob/main/demo/screen-1.png)|![Screen 2](https://github.com/rasfarrf5/retroboard-appscript/blob/main/demo/screen-2.png) |

## More Info:
- Replace your company name and url to show app logo
- This retroboard required your Google Account authentication to store and retrieve retro information depends on Step 5.3
- We are not responsible for security as it is tied with your Google Account

## License
MIT License



```Lets learn together!```