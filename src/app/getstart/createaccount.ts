export class Createaccount {
    constructor(
        public ueserName = ' ',
        public email = ' ',
        public password = ' ',
        public confirmPassword = ' ',
        public acceptTerms: boolean = false
    ) { }
}