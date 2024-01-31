import _ from 'lodash'

export const validateEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i

    return re.test(email)
}

export const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|[^a-zA-Z]).{8,}$/
    return re.test(password)
}

export const validateName = (name: string) => {
    const re = /^([a-zA-Z ]{1,})$/
    return re.test(name)
}

export const validateFullName = (name: string) => {
    const re = /([^\s]+\s)+[^\s]+/g
    return re.test(name)
}

export const validateMobile = (number: string) => {
    if (!_.trim(number)) {
        return false
    }
    const isLength = number.length >= 10 && number.length <= 12
    if (!isLength) {
        return isLength
    }

    const re = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    // const re = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
    return re.test(number)
}

export const validateLink = (link: string) => {
    const re = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9._]+\/?(?:\?[^#\s]*)?$/
    return re.test(link)
}
