import Image from 'next/image';
import iconImage from '@/app/icon.jpg';

export default function Icons() {
    return (
        <div>
            <div className={undefined}>
                <img
                    src="./icon.jpg"
                    alt="My Icon"
                    width={80}
                    height={80}
                />
            </div>
        </div>
    );
}