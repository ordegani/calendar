import React from 'react'
import './App.css';

export default function LeftSection() {
    const arr1 = [];
    const arr2 = []
    const n = 13;
    for (let i = 1; i < n; i++) {
        if (i >= 9) {
            arr1.push(i);
        } else if (i <= 10) {
            arr2.push(i);
        }
    }
    const arr = arr1.concat(arr2);
    arr[12] = 9;
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
return (
        <div className='hours'>{
            arr.slice(0, 4).map((hour, index) => {
                return (
                    <div className='hour'>
                        <p>{hour}:00am</p>
                        <p>{hour}:30</p>
                    </div>

                )
            })
        }
            {
                arr.slice(4, 13).map((hour, index) => {
                    return (
                        <div className='hour'>
                            <p>{hour}:00pm</p>
                            <p>{hour}:30</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

