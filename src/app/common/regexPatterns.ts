export class RegexPatterns
{
     
    emailPattern:string="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
    textPattern:string="^[a-zA-Z ]{2,30}$";
    alphaNumericUnderscorePattern:string="^[a-zA-Z0-9_]*$";
    mobilePattern:string="[7-9][0-9]{9}$";
    pinCode:string="[1-9][0-9]{5}$";
    numeric:string="^\d{1,15}$"
}