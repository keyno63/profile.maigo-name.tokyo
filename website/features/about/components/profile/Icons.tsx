import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X';
import BookIcon from '@mui/icons-material/Book';

export default function Icons() {
    return (
        <div>
            <div className={undefined}>
                <img
                    src="/icon.jpg"
                    alt="My Icon"
                    width={120}
                    height={120}
                />
                <a
                    href="https://github.com/keyno63"
                    target="_blank"
                >
                    <GitHubIcon fontSize="medium"/>
                </a>
                <a
                    href="https://x.com/maigo_name"
                    target="_blank"
                >
                    <XIcon fontSize="medium"/>
                </a>
                <a
                    href="https://www.maigo-name.tokyo/"
                    target="_blank"
                >
                    <BookIcon fontSize="medium"/>
                </a>
                <a
                    href="https://zenn.dev/maigo_name"
                    target="_blank"
                >
                    <BookIcon fontSize="medium"/>
                </a>
                <a
                    href="https://lapras.com/public/0KCZQVD"
                    target="_blank"
                >
                    <BookIcon fontSize="medium"/>
                </a>
            </div>
        </div>
    );
}