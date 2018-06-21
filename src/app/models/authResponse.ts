export class AuthResponse {

    email: {
        type: string,
        unique: true,
        required: true
    };
    name: {
        type: string,
        required: true
    };
    surname: {
        type: string,
        required: false
    };
    username: {
        type: string,
        required: false
    };
    profileImage: {
        type: string,
        required: false,
        default: '../images/user.png'
    };
    address: {
        street: {
            type: string,
            required: false,
            default: ''
        };
        number: {
            type: string,
            required: false,
            default: ''
        };
        city: {
            type: string,
            required: false,
            default: ''
        };
        postaCode: {
            type: string,
            required: false,
            default: ''
        };
        country: {
            type: string,
            required: false,
            default: ''
        };
        full: {
            type: string,
            required: false,
            default: ''
        }
    };
    qualification: {
        type: string,
        required: false,
        default: ''
    };
    phone: {
        type: string,
        required: false,
        default: ''
    };
    token: string;
    hash: string;
    salt: string;
}
