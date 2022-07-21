import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Hero = ({date, setDate}) => {
    
    return (
        <div className='hero bg-hero-bg bg-no-repeat bg-cover min-h-sereen'>
            <div className="hero-content flex flex-col mb-7 items-center py-5 md:py-20 lg:flex-row-reverse container-area">
                <div className='mb-8 lg:mb-0 lg:basis-1/2 md:pr-20'>
                    <img src={chair} className=" rounded-lg shadow-2xl" alt='chair' />
                </div>
                <div className='lg:basis-1/2 flex justify-center'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;