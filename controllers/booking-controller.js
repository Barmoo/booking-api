import { booking } from "../models/booking-models.js";


export const getAllBookings = async(req, res,next)=>{
    try {
        const newBooking = new booking()
    } catch (error) {
        next(error);
        
    }
        const bookings = newBooking.save(req.body)

    res.status(200).json('These are all booking');
}
export const getOneBooking = (req,res) =>{
    res.status(200).json('Only one booking');
}

export const postBooking= async(req,res,next) =>{
    try {
        const newBooking = new booking()
    } catch (error) {
        next(error);
        
    }
        const bookings = newBooking.save(req.body)
    res.status(200).json(booking)

}

export const updateBooking = (req,res)=>{
    res.status(200).json('Just Booking');
}
export const deleteBooking = (req,res)=>{
    res.status(200).json('one Booking');
}
