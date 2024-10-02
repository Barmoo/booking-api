import { booking } from "../models/booking-models.js";


export const getAllBookings = (req, res)=>{
    res.status(200).json('These are all booking');
}
export const getOneBooking = (req,res) =>{
    res.status(200).json('Only one booking');
}

export const postBooking= async(req,res) =>{
    const newBooking = new booking()
        const bookings = await newBooking.save(req.body)
    res.status(200).json(booking)

}

export const updateBooking = (req,res)=>{
    res.status(200).json('Just Booking');
}
export const deleteBooking = (req,res)=>{
    res.status(200).json('one Booking');
}
