import React from 'react';
import { Navbar } from '../navbar/navbar';
import { GlobalContext } from '../../context/navContext';

import './layoutCss.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header column">
        <div className="header__wrapper">
          <div className="opposite-svg-header">
            <svg width="100%" height="242" viewBox="0 0 1170 242" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 125.667C1 84.2907 33.2833 49.8552 81.7082 49.8552C124.484 49.8552 158.65 74.3906 158.65 121.255C158.65 162.363 126.69 196.583 78.4262 196.583C35.2742 196.798 1 172.532 1 125.667ZM102.477 129.003C102.477 93.1148 93.6529 74.3905 78.2108 74.3905C66.3197 74.3905 57.2268 87.8957 57.2268 117.973C57.2268 153.538 65.7817 172.263 81.2239 172.263C93.1149 172.263 102.477 158.758 102.477 129.003Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M252.54 196.798C245.863 196.757 239.209 196.017 232.686 194.592V240.918H180.871V55.8813L232.686 49.8551V77.9416C235.581 69.3917 241.19 62.0213 248.658 56.9515C256.127 51.8817 265.047 49.3899 274.062 49.8551C301.934 49.8551 327.007 76.7579 327.007 119.049C327.007 163.708 299.727 196.798 252.54 196.798ZM232.686 84.5597V167.582C237.022 171.771 242.798 174.14 248.827 174.2C262.871 174.2 271.426 161.502 271.426 139.172C271.426 105.544 259.858 83.7526 239.68 83.7526C237.326 83.7658 234.981 84.0364 232.686 84.5597V84.5597Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M422.296 196.798C415.619 196.757 408.965 196.017 402.442 194.592V240.918H350.627V55.8813L402.442 49.8551V77.9416C405.337 69.3917 410.946 62.0213 418.415 56.9515C425.883 51.8817 434.803 49.3899 443.818 49.8551C471.689 49.8551 496.763 76.7579 496.763 119.049C496.763 163.708 469.483 196.798 422.296 196.798ZM402.442 84.5597V167.582C406.778 171.771 412.554 174.14 418.583 174.2C432.627 174.2 441.182 161.502 441.182 139.172C441.182 105.544 429.613 83.7526 409.436 83.7526C407.082 83.7658 404.737 84.0364 402.442 84.5597V84.5597Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M516.133 125.667C516.133 84.2907 548.416 49.8552 596.841 49.8552C639.616 49.8552 673.783 74.3906 673.783 121.255C673.783 162.363 641.823 196.583 593.559 196.583C550.299 196.798 516.133 172.532 516.133 125.667ZM617.61 129.003C617.61 93.1148 608.786 74.3905 593.344 74.3905C581.453 74.3905 572.36 87.8957 572.36 117.973C572.36 153.538 580.915 172.263 596.357 172.263C608.194 172.263 617.61 158.758 617.61 129.003Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M736.897 152.678V155.744C736.716 158.29 737.069 160.845 737.935 163.246C738.8 165.646 740.158 167.839 741.922 169.684C743.685 171.528 745.815 172.984 748.174 173.956C750.534 174.928 753.07 175.396 755.621 175.33C765.575 175.33 771.063 169.949 771.063 162.632C771.063 153 764.176 149.395 750.671 145.521L734.53 140.84C711.124 133.684 695.951 120.448 695.951 98.3879C695.951 71.9156 717.473 49.9629 758.796 49.9629C786.129 49.9629 813.677 60.724 816.152 87.6268L769.288 93.3839V90.6399C769.288 76.3276 763.208 71.0547 754.707 71.0547C752.995 70.8846 751.267 71.0828 749.638 71.636C748.01 72.1892 746.519 73.0847 745.265 74.262C744.011 75.4394 743.024 76.8715 742.369 78.462C741.715 80.0526 741.408 81.7649 741.47 83.4837C741.47 90.9089 747.497 97.2579 761.863 100.863L777.036 104.737C803.939 111.624 821.425 122.062 821.425 146.92C821.425 173.393 797.159 196.798 751.478 196.798C722.262 196.798 693.852 187.436 688.902 158.758L736.897 152.678Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M846.877 1H900.682V34.6823H846.877V1ZM847.953 55.8816L899.821 49.8554V194.054H847.738L847.953 55.8816Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M922.742 52.5993H942.327V17.0339L994.196 10.9539V52.5993H1030.68V79.5021H994.303V193.946H942.435V79.6097H922.85L922.742 52.5993Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M1085.5 127.873C1095.4 151.332 1119.99 156.821 1135.17 156.821C1147.9 157.475 1160.5 153.9 1171 146.651C1167.93 174.738 1147 196.798 1107.56 196.798C1068.93 196.798 1035.03 169.519 1035.03 125.667C1035.03 77.2422 1069.25 49.8552 1105.89 49.8552C1136.51 49.8552 1167.93 62.8223 1169.6 102.208L1085.5 127.873ZM1081.36 105.544H1120.26C1122.74 82.3538 1114.18 73.8524 1102.02 73.8524C1088.78 73.8524 1080.55 88.1648 1081.36 105.544V105.544Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
          </div>
          <GlobalContext.Consumer>
            {() => <Navbar />}
          </GlobalContext.Consumer>
        </div>
      </header>
      <main className="content column">
      <section className="main-content">
        {children}
      </section>
    </main>
      <footer className="column">
      <div className="opposite-svg-footer">
        <svg width="100%" height="242" viewBox="0 0 1170 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 125.667C1 84.2907 33.2833 49.8552 81.7082 49.8552C124.484 49.8552 158.65 74.3906 158.65 121.255C158.65 162.363 126.69 196.583 78.4262 196.583C35.2742 196.798 1 172.532 1 125.667ZM102.477 129.003C102.477 93.1148 93.6529 74.3905 78.2108 74.3905C66.3197 74.3905 57.2268 87.8957 57.2268 117.973C57.2268 153.538 65.7817 172.263 81.2239 172.263C93.1149 172.263 102.477 158.758 102.477 129.003Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M252.54 196.798C245.863 196.757 239.209 196.017 232.686 194.592V240.918H180.871V55.8813L232.686 49.8551V77.9416C235.581 69.3917 241.19 62.0213 248.658 56.9515C256.127 51.8817 265.047 49.3899 274.062 49.8551C301.934 49.8551 327.007 76.7579 327.007 119.049C327.007 163.708 299.727 196.798 252.54 196.798ZM232.686 84.5597V167.582C237.022 171.771 242.798 174.14 248.827 174.2C262.871 174.2 271.426 161.502 271.426 139.172C271.426 105.544 259.858 83.7526 239.68 83.7526C237.326 83.7658 234.981 84.0364 232.686 84.5597V84.5597Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M422.296 196.798C415.619 196.757 408.965 196.017 402.442 194.592V240.918H350.627V55.8813L402.442 49.8551V77.9416C405.337 69.3917 410.946 62.0213 418.415 56.9515C425.883 51.8817 434.803 49.3899 443.818 49.8551C471.689 49.8551 496.763 76.7579 496.763 119.049C496.763 163.708 469.483 196.798 422.296 196.798ZM402.442 84.5597V167.582C406.778 171.771 412.554 174.14 418.583 174.2C432.627 174.2 441.182 161.502 441.182 139.172C441.182 105.544 429.613 83.7526 409.436 83.7526C407.082 83.7658 404.737 84.0364 402.442 84.5597V84.5597Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M516.133 125.667C516.133 84.2907 548.416 49.8552 596.841 49.8552C639.616 49.8552 673.783 74.3906 673.783 121.255C673.783 162.363 641.823 196.583 593.559 196.583C550.299 196.798 516.133 172.532 516.133 125.667ZM617.61 129.003C617.61 93.1148 608.786 74.3905 593.344 74.3905C581.453 74.3905 572.36 87.8957 572.36 117.973C572.36 153.538 580.915 172.263 596.357 172.263C608.194 172.263 617.61 158.758 617.61 129.003Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M736.897 152.678V155.744C736.716 158.29 737.069 160.845 737.935 163.246C738.8 165.646 740.158 167.839 741.922 169.684C743.685 171.528 745.815 172.984 748.174 173.956C750.534 174.928 753.07 175.396 755.621 175.33C765.575 175.33 771.063 169.949 771.063 162.632C771.063 153 764.176 149.395 750.671 145.521L734.53 140.84C711.124 133.684 695.951 120.448 695.951 98.3879C695.951 71.9156 717.473 49.9629 758.796 49.9629C786.129 49.9629 813.677 60.724 816.152 87.6268L769.288 93.3839V90.6399C769.288 76.3276 763.208 71.0547 754.707 71.0547C752.995 70.8846 751.267 71.0828 749.638 71.636C748.01 72.1892 746.519 73.0847 745.265 74.262C744.011 75.4394 743.024 76.8715 742.369 78.462C741.715 80.0526 741.408 81.7649 741.47 83.4837C741.47 90.9089 747.497 97.2579 761.863 100.863L777.036 104.737C803.939 111.624 821.425 122.062 821.425 146.92C821.425 173.393 797.159 196.798 751.478 196.798C722.262 196.798 693.852 187.436 688.902 158.758L736.897 152.678Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M846.877 1H900.682V34.6823H846.877V1ZM847.953 55.8816L899.821 49.8554V194.054H847.738L847.953 55.8816Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M922.742 52.5993H942.327V17.0339L994.196 10.9539V52.5993H1030.68V79.5021H994.303V193.946H942.435V79.6097H922.85L922.742 52.5993Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
          <path d="M1085.5 127.873C1095.4 151.332 1119.99 156.821 1135.17 156.821C1147.9 157.475 1160.5 153.9 1171 146.651C1167.93 174.738 1147 196.798 1107.56 196.798C1068.93 196.798 1035.03 169.519 1035.03 125.667C1035.03 77.2422 1069.25 49.8552 1105.89 49.8552C1136.51 49.8552 1167.93 62.8223 1169.6 102.208L1085.5 127.873ZM1081.36 105.544H1120.26C1122.74 82.3538 1114.18 73.8524 1102.02 73.8524C1088.78 73.8524 1080.55 88.1648 1081.36 105.544V105.544Z" stroke="#333333" stroke-opacity="0.5" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </div>
    </footer>
   </div>
  );
}

export { Layout }