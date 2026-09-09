import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X';
import BookIcon from '@mui/icons-material/Book';
import SvgIcon from '@mui/material/SvgIcon';

export default function Icons() {
    return (
        <div>
            <div className={undefined}>
                <img
                    src="/icon.jpg"
                    alt="名前迷子のプロフィール画像"
                    width={120}
                    height={120}
                />
                <a
                    href="https://github.com/keyno63"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHubプロフィール"
                >
                    <GitHubIcon fontSize="medium"/>
                </a>
                <a
                    href="https://x.com/maigo_name"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Xプロフィール"
                >
                    <XIcon fontSize="medium"/>
                </a>
                <a
                    href="https://www.maigo-name.tokyo/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="個人ブログ"
                >
                    <SvgIcon fontSize="medium" viewBox="0 0 24 24">
                        <image
                            href="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hatenabookmark.svg"
                            width="24"
                            height="24"
                        />
                    </SvgIcon>
                </a>
                <a
                    href="https://zenn.dev/maigo_name"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Zennプロフィール"
                >
                    <SvgIcon fontSize="medium" viewBox="0 0 24 24">
                        <image
                            href="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zenn.svg"
                            width="24"
                            height="24"
                        />
                    </SvgIcon>
                </a>
                <a
                    href="https://lapras.com/public/0KCZQVD"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LAPRASプロフィール"
                >
                    <BookIcon fontSize="medium"/>
                </a>
            </div>
        </div>
    );
}
