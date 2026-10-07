import { Github } from './Github';
import { Linkedin } from './Linkedin';
import { Twitter } from './Twitter';

const SocialMedias = () => (
  <ul className="my-4 flex list-none justify-start p-0">
    <li className="mr-8 w-7">
      <a href="https://twitter.com/emilien_muraton/">
        <Twitter />
      </a>
    </li>
    <li className="mr-8 w-7">
      <a href="https://www.linkedin.com/in/emilien-muraton-92b334a1/">
        <Linkedin />
      </a>
    </li>
    <li className="mr-8 w-7">
      <a href="https://github.com/emuraton/">
        <Github />
      </a>
    </li>
  </ul>
);

export default SocialMedias;
