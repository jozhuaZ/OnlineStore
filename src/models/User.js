import generateUserID from "../helpers/generateUserID";
import default_profile_img from '../assets/default_profile.png';

export default class User {
    constructor ({ firstName, lastName, email, password, phoneNumber }) {
        this.id = generateUserID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;

        this.profilePicture = {default_profile_img};
    }

    // GETTERS
    getFirstName() {
        return `${this.firstName}`; 
    }
    getLastName() {
        return `${this.lastName}`;
    }
    getEmail() {
        return `${this.email}`;
    }
    getPhoneNumber() {
        return `${this.phoneNumber}`;
    }

    // SETTERS
    setFirstName({ firstName }) {
        this.firstName = firstName;
    }
    setLastName({ lastName }) {
        this.lastName = lastName;
    }
    setEmail({ email }) {
        this.email = email;
    }
    setPhoneNumber({ phoneNumber }) {
        this.phoneNumebr = phoneNumber;
    }
};