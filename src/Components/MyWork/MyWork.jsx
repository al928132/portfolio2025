import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My latest work</h1>
            </div>
            <div className='mywork-container'>
                {mywork_data.map((work, index) => (
                    <div key={index} className='mywork-frame'>
                        <div className='mywork-mat'>
                            <img src={work.w_img} alt={work.w_name} />
                        </div>
                        <div className='mywork-label'>
                            <p className='mywork-label-title'>{work.w_name}</p>
                            <p className='mywork-label-num'>No. {String(index + 1).padStart(2, '0')}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arrow_icon} />
            </div>
        </div>
    )
}

export default MyWork
