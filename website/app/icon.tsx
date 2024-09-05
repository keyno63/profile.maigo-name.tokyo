import Image from 'next/image';
import iconImage from './icon.jpg';

export default function Icon() {
    return (
        <Image
            src={iconImage}
            alt="App Icon"
            width={48}
            height={48}
        />
    );
}
