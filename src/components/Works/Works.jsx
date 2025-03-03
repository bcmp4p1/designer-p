import './Works.scss';
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.svg';
import p4 from '@/assets/p4.png';
import vector from '@/assets/vector.svg';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Works = () => (
  <div className="works">
    <SectionTitle
      section="MY WORKS"
      title="Partners in work, friends for life"
    />
    <div className="works__links">
      <Link to="/ceratops" className="works__link" aria-label="Close">
        <img src={p1} alt="" />
      </Link>
      <img src={vector} alt="" />
      <Link to="/sentinel" className="works__link" aria-label="Close">
        <img src={p2} alt="" />
      </Link>
      <img src={vector} alt="" />
      <button className="works__link" aria-label="Close">
        <div className="works__link-p3">
          <img src={p3} alt="" />
        </div>
      </button>
      <img src={vector} alt="" />
      <button className="works__link" aria-label="Close">
        <img src={p4} alt="" />
      </button>
    </div>
  </div>
);
