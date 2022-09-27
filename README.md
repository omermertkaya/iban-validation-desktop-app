# iban-validation-desktop-app
App is iban validation. User choose excel file for iban validation. App will verify for iban with Turkish Bank Name.

####  - Choose your Input.xlsx 

| Row Number  | Name  | Surname  | Iban Value  | Bank Name  | Iban Validation  | Error Code  | 
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 1  | Ömer Mert  | Kaya  | TR950001001###############  |   |   |   |

####  - Click Start Button -> export.xlsx 

| Row Number  | Name  | Surname  | Iban Value  | Bank Name  | Iban Validation  | Error Code  | 
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| 1  | Ömer Mert  | Kaya  | TR950001001###############  | T.C.ZİRAAT BANKASI A.Ş | True  |   |




### Installation Project

1. Clone the repo
   ```sh
   git clone https://github.com/omermertkaya/iban-validation-desktop-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start App
   ```sh
   npm start
   ```

### Build for Windows Desktop App
4. In the project folder

   ```sh
   electron-packager ./ IBANAPP --platform=win32 --arch=x64 --icon="./img/iban-kontrol.ico"
   ```

### Screen View

![screen1](screen/screen1.png)


------------

![screen2](screen/screen2.png)


------------

![screen3](screen/screen3.png)





