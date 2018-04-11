/**
 * Created by zhouqihang on 2018/4/11.
 */

import React from 'react';
import { Spin as AntSpin} from 'antd';
import './styles/Spin.scss';

const Spin = (props) => <div className="self-spin"><AntSpin {...props} /></div>;

export default Spin;
