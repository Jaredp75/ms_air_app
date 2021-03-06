import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from './components/Baselayout';
import Home from './components/Home.js';
import About from './components/About';
// import TermsOfUse from '../components/terms';
// import PrivacyPolicy from '../components/privacy';
// import OptInForm from '../components/opt-in-form';
// import Login from '../components/login';
// import Register from '../components/register';
// import MyAccount from '../components/myaccount';
// import Checkout from '../components/checkout';
// import ProductLines from '../components/product_lines';
// import ContactUs from '../components/contact_us';
// import ViewCart from '../components/viewcart';
import prodID409 from './components/product_pages/prodID409';
import prodID8 from './components/product_pages/prodID8';
import prodID341 from './components/product_pages/prodID341';
import prodID14 from './components/product_pages/prodID14';
import prodID643 from './components/product_pages/prodID643';
import prodID1170 from './components/product_pages/prodID1170';
import prodID1423 from './components/product_pages/prodID1423';
import prodID1425 from './components/product_pages/prodID1425';
// import prodID1426 from '../components/product_pages/prodID1426';
// import prodID1460 from '../components/product_pages/prodID1460';
// import prodID1467 from '../components/product_pages/prodID1467';
// import prodID1469 from '../components/product_pages/prodID1469';
// import prodID1476 from '../components/product_pages/prodID1476';
// import prodID1437 from '../components/product_pages/prodID1437';
// import prodID1506 from '../components/subcat=205/prodID1506';
// import prodID1507 from '../components/subcat=205/prodID1507';
// import prodID1508 from '../components/subcat=205/prodID1508';
// import prodID1509 from '../components/subcat=205/prodID1509';
// import prodID1510 from '../components/subcat=205/prodID1510';
// import prodID1511 from '../components/subcat=205/prodID1511';
// import prodID1512 from '../components/subcat=205/prodID1512';
// import prodID1513 from '../components/subcat=205/prodID1513';
// import prodID1514 from '../components/subcat=205/prodID1514';
// import prodID1515 from '../components/subcat=205/prodID1515';
// import prodID1516 from '../components/subcat=205/prodID1516';
// import prodID1517 from '../components/subcat=205/prodID1517';
// import prodID1518 from '../components/subcat=205/prodID1518';
// import prodID1519 from '../components/subcat=205/prodID1519';
// import prodID1520 from '../components/subcat=205/prodID1520';
// import prodID1521 from '../components/subcat=205/prodID1521';
// import prodID1522 from '../components/subcat=205/prodID1522';
// import prodID1523 from '../components/subcat=205/prodID1523';
// import prodID1524 from '../components/subcat=205/prodID1524';
// import prodID1525 from '../components/subcat=205/prodID1525';
// import prodID1526 from '../components/subcat=205/prodID1526';
// import prodID1527 from '../components/subcat=205/prodID1527';
// import prodID1528 from '../components/subcat=205/prodID1528';
// import prodID1529 from '../components/subcat=205/prodID1529';
// import prodID1530 from '../components/subcat=205/prodID1530';
// import prodID1531 from '../components/subcat=205/prodID1531';
// import prodID1532 from '../components/subcat=205/prodID1532';
// import prodID1533 from '../components/subcat=205/prodID1533';
// import prodID1534 from '../components/subcat=205/prodID1534';
// import prodID1535 from '../components/subcat=205/prodID1535';
// import prodID1536 from '../components/subcat=205/prodID1536';
// import prodID1537 from '../components/subcat=205/prodID1537';
// import prodID1538 from '../components/subcat=205/prodID1538';
// import prodID1539 from '../components/subcat=205/prodID1539';
// import prodID1540 from '../components/subcat=205/prodID1540';
// import prodID1541 from '../components/subcat=205/prodID1541';
// import prodID1542 from '../components/subcat=205/prodID1542';
// import prodID1543 from '../components/subcat=205/prodID1543';
// import prodID1544 from '../components/subcat=205/prodID1544';
// import prodID1545 from '../components/subcat=205/prodID1545';
// import prodID1546 from '../components/subcat=205/prodID1546';
// import prodID1547 from '../components/subcat=205/prodID1547';
// import prodID1548 from '../components/subcat=205/prodID1548';
// import prodID1549 from '../components/subcat=205/prodID1549';
// import prodID1550 from '../components/subcat=205/prodID1550';
// import prodID1551 from '../components/subcat=205/prodID1551';
// import prodID1552 from '../components/subcat=205/prodID1552';
// import prodID1553 from '../components/subcat=205/prodID1553';
// import prodID1554 from '../components/subcat=205/prodID1554';
// import prodID1555 from '../components/subcat=205/prodID1555';
// import prodID1556 from '../components/subcat=205/prodID1556';
// import prodID1557 from '../components/subcat=205/prodID1557';
// import prodID1558 from '../components/subcat=205/prodID1558';
// import prodID1559 from '../components/subcat=205/prodID1559';
// import prodID1560 from '../components/subcat=205/prodID1560';
// import prodID1561 from '../components/subcat=205/prodID1561';
// import Category from '../components/category_pages/category';
import Cat_Trident from './components/category_pages/cat_trident';
import Cat_Sullivan_Palatek from './components/category_pages/cat_sullivan_palatek';
import Cat_Zeks from './components/category_pages/cat_zeks';
// import ZTF_Replacement_Elements from '../components/subcat=205/ztf_replacement_elements';
// import Air_Dryers from '../components/subcat=233/air_dryers';
// import Compressed_Air_Filters from '../components/subcat=233/compressed_air_filters';
// import Filters from '../components/subcat=233/filters';
// import Grade_A_Activated_Carbon from '../components/subcat=233/grade_a_activated_carbon';
// import Grade_G_General_Purpose from '../components/subcat=233/grade_g_general_purpose';
// import Grade_P_Particulate_Bulk_Liquid from '../components/subcat=233/grade_p_particulate_bulk_liquid';
// import Grade_H_High_Efficiency from '../components/subcat=233/grade_h_high_efficiency';
// import ZTF_Replacement_Parts from '../components/subcat=233/ztf_replacement_parts';
// import Air_Compressors from '../components/subcat=244/air_compressors';
// import Desiccant_Air_Dryers from '../components/subcat=249/desiccant_air_dryers';
// import Particulate_Filters from '../components/subcat=251/particulate_filters';
// import Coalescing_Filters from '../components/subcat=252/coalescing_filters';
// import prodID1633 from '../components/subcat=244/prodID1633';
// import prodID1641 from '../components/subcat=244/prodID1641';
// import prodID1640 from '../components/subcat=244/prodID1640';
// import prodID1639 from '../components/subcat=244/prodID1639';
// import prodID1638 from '../components/subcat=244/prodID1638';
// import prodID1637 from '../components/subcat=244/prodID1637';
// import prodID1636 from '../components/subcat=244/prodID1636';
// import prodID1635 from '../components/subcat=244/prodID1635';
// import prodID1634 from '../components/subcat=244/prodID1634';
// import prodID1642 from '../components/subcat=244/prodID1642';
// import prodID1702 from '../components/subcat=251/prodID1702';
// import prodID1703 from '../components/subcat=251/prodID1703';
// import prodID1704 from '../components/subcat=251/prodID1704';
// import prodID1706 from '../components/subcat=249/prodID1706';
// import prodID1707 from '../components/subcat=249/prodID1707';
// import prodID1708 from '../components/subcat=249/prodID1708';
// import prodID1709 from '../components/subcat=249/prodID1709';
// import prodID1710 from '../components/subcat=249/prodID1710';
// import prodID1711 from '../components/subcat=249/prodID1711';
// import prodID1712 from '../components/subcat=249/prodID1712';
// import prodID1713 from '../components/subcat=249/prodID1713';
// import prodID1714 from '../components/subcat=249/prodID1714';
// import prodID1715 from '../components/subcat=249/prodID1715';
// import prodID1716 from '../components/subcat=249/prodID1716';
// import prodID1719 from '../components/subcat=252/prodID1719';
// import prodID1720 from '../components/subcat=252/prodID1720';
// import prodID1722 from '../components/subcat=252/prodID1722';
// import prodID1771 from '../components/subcat=233/prodID1771';
// import prodID1772 from '../components/subcat=233/prodID1772';
// import prodID1773 from '../components/subcat=233/prodID1773';
// import prodID1774 from '../components/subcat=233/prodID1774';
// import prodID1831 from '../components/subcat=233/prodID1831';
// import prodID1775 from '../components/subcat=233/prodID1775';
// import prodID1776 from '../components/subcat=233/prodID1776';
// import prodID1777 from '../components/subcat=233/prodID1777';
// import prodID1778 from '../components/subcat=233/prodID1778';
// import prodID1779 from '../components/subcat=233/prodID1779';
// import prodID1780 from '../components/subcat=233/prodID1780';
// import prodID1781 from '../components/subcat=233/prodID1781';
// import prodID1782 from '../components/subcat=233/prodID1782';
// import prodID1783 from '../components/subcat=233/prodID1783';
// import prodID1784 from '../components/subcat=233/prodID1784';
// import prodID1785 from '../components/subcat=233/prodID1785';
// import prodID1786 from '../components/subcat=233/prodID1786';
// import prodID1787 from '../components/subcat=233/prodID1787';
// import prodID1788 from '../components/subcat=233/prodID1788';
// import prodID1789 from '../components/subcat=233/prodID1789';
// import prodID1790 from '../components/subcat=233/prodID1790';
// import prodID1791 from '../components/subcat=233/prodID1791';
// import prodID1792 from '../components/subcat=233/prodID1792';
// import prodID1793 from '../components/subcat=233/prodID1793';
// import prodID1794 from '../components/subcat=233/prodID1794';
// import prodID1795 from '../components/subcat=233/prodID1795';
// import prodID1796 from '../components/subcat=233/prodID1796';
// import prodID1797 from '../components/subcat=233/prodID1797';
// import prodID1798 from '../components/subcat=233/prodID1798';
// import prodID1799 from '../components/subcat=233/prodID1799';
// import prodID1800 from '../components/subcat=233/prodID1800';
// import prodID1801 from '../components/subcat=233/prodID1801';
// import prodID1802 from '../components/subcat=233/prodID1802';
// import prodID1803 from '../components/subcat=233/prodID1803';
// import prodID1804 from '../components/subcat=233/prodID1804';
// import prodID1805 from '../components/subcat=233/prodID1805';
// import prodID1806 from '../components/subcat=233/prodID1806';
// import prodID1807 from '../components/subcat=233/prodID1807';
// import prodID1808 from '../components/subcat=233/prodID1808';
// import prodID1809 from '../components/subcat=233/prodID1809';
// import prodID1810 from '../components/subcat=233/prodID1810';
// import prodID1811 from '../components/subcat=233/prodID1811';
// import prodID1812 from '../components/subcat=233/prodID1812';
// import prodID1813 from '../components/subcat=233/prodID1813';
// import prodID1814 from '../components/subcat=233/prodID1814';
// import prodID1815 from '../components/subcat=233/prodID1815';
// import prodID1816 from '../components/subcat=233/prodID1816';
// import prodID1817 from '../components/subcat=233/prodID1817';
// import prodID1818 from '../components/subcat=233/prodID1818';
// import prodID1819 from '../components/subcat=233/prodID1819';
// import prodID1820 from '../components/subcat=233/prodID1820';
// import prodID1821 from '../components/subcat=233/prodID1821';
// import prodID1822 from '../components/subcat=233/prodID1822';
// import prodID1823 from '../components/subcat=233/prodID1823';
// import prodID1824 from '../components/subcat=233/prodID1824';
// import prodID1825 from '../components/subcat=233/prodID1825';
// import prodID1826 from '../components/subcat=233/prodID1826';
// import prodID1827 from '../components/subcat=233/prodID1827';
// import prodID1828 from '../components/subcat=233/prodID1828';
// import prodID1829 from '../components/subcat=233/prodID1829';
// import prodID1830 from '../components/subcat=233/prodID1830';
// import prodID1832 from '../components/subcat=233/prodID1832';
// import prodID1833 from '../components/subcat=233/prodID1833';
// import prodID1834 from '../components/subcat=233/prodID1834';
// import prodID1835 from '../components/subcat=233/prodID1835';
// import prodID1836 from '../components/subcat=233/prodID1836';
// import prodID1837 from '../components/subcat=233/prodID1837';
// import prodID1838 from '../components/subcat=233/prodID1838';
// import prodID1839 from '../components/subcat=233/prodID1839';
// import prodID1840 from '../components/subcat=233/prodID1840';
// import prodID1841 from '../components/subcat=233/prodID1841';
// import prodID1842 from '../components/subcat=233/prodID1842';
// import prodID1843 from '../components/subcat=233/prodID1843';
// import prodID1844 from '../components/subcat=233/prodID1844';
// import prodID1845 from '../components/subcat=233/prodID1845';
// import prodID1846 from '../components/subcat=233/prodID1846';
// import prodID1847 from '../components/subcat=233/prodID1847';
// import prodID1848 from '../components/subcat=233/prodID1848';
// import prodID1849 from '../components/subcat=233/prodID1849';
// import prodID1850 from '../components/subcat=233/prodID1850';
// import prodID1851 from '../components/subcat=233/prodID1851';
// import prodID1852 from '../components/subcat=233/prodID1852';
// import prodID1853 from '../components/subcat=233/prodID1853';
// import prodID1854 from '../components/subcat=233/prodID1854';
// import prodID1855 from '../components/subcat=233/prodID1855';
// import prodID1856 from '../components/subcat=233/prodID1856';
// import prodID1857 from '../components/subcat=233/prodID1857';
// import prodID1858 from '../components/subcat=233/prodID1858';
// import prodID1859 from '../components/subcat=233/prodID1859';
// import prodID1860 from '../components/subcat=233/prodID1860';
// import prodID1861 from '../components/subcat=233/prodID1861';
// import prodID1862 from '../components/subcat=233/prodID1862';
// import prodID1863 from '../components/subcat=233/prodID1863';
// import prodID1864 from '../components/subcat=233/prodID1864';
// import prodID1865 from '../components/subcat=233/prodID1865';
// import prodID1866 from '../components/subcat=233/prodID1866';
// import prodID1867 from '../components/subcat=233/prodID1867';
// import prodID1868 from '../components/subcat=233/prodID1868';
// import prodID1869 from '../components/subcat=233/prodID1869';
// import prodID1870 from '../components/subcat=233/prodID1870';
// import prodID1871 from '../components/subcat=233/prodID1871';
// import prodID1872 from '../components/subcat=233/prodID1872';
// import prodID1873 from '../components/subcat=233/prodID1873';
// import prodID1874 from '../components/subcat=233/prodID1874';
// import prodID1875 from '../components/subcat=233/prodID1875';
// import prodID1876 from '../components/subcat=233/prodID1876';
// import prodID1877 from '../components/subcat=233/prodID1877';
// import prodID1878 from '../components/subcat=233/prodID1878';
// import prodID1879 from '../components/subcat=233/prodID1879';
// import prodID1880 from '../components/subcat=233/prodID1880';
// import prodID1881 from '../components/subcat=233/prodID1881';
// import prodID1882 from '../components/subcat=233/prodID1882';
// import prodID1883 from '../components/subcat=233/prodID1883';
// import prodID1884 from '../components/subcat=233/prodID1884';
// import prodID1885 from '../components/subcat=233/prodID1885';
// import prodID1886 from '../components/subcat=233/prodID1886';
// import prodID1887 from '../components/subcat=233/prodID1887';
// import prodID1888 from '../components/subcat=233/prodID1888';
// import prodID1889 from '../components/subcat=233/prodID1889';
// import prodID1890 from '../components/subcat=233/prodID1890';
// import prodID1891 from '../components/subcat=233/prodID1891';
// import prodID1892 from '../components/subcat=233/prodID1892';
// import prodID1893 from '../components/subcat=233/prodID1893';
// import prodID1894 from '../components/subcat=233/prodID1894';
// import prodID1895 from '../components/subcat=233/prodID1895';
// import prodID1896 from '../components/subcat=233/prodID1896';
// import prodID1897 from '../components/subcat=233/prodID1897';
// import prodID1898 from '../components/subcat=233/prodID1898';




class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="header">
          <div className="top-header">
            <div className="header header-v1">
              <div className="header-language-background">
                <div className="wrap-container">
                  <div className="header-wrap">
                    <div id="welcome-msg">
                      <strong>CALL NOW: 1-877-MSAIR99</strong>
                  </div>

                </div>
              </div>
            </div>
          </div>

            <div id="top-nav">
              <div id="top-links">
                <a className="active" href="/myaccount">My Account</a>
                <a href="/checkout">Checkout</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
              </div>
            </div>
          </div>


          <div className="middle-header">
            <div className="title-wrapper">
              <div className="title-header">
                <div className="app-header">
                  <div className="content">
                    <div className="title-header-left-div">
                      <div id="app-title">MS <font color="yellow">AIR</font>
                        <div><p>Your source for compressed air vacuum systems for medical, dental, laboratory and industrial applications</p></div>
                      </div>
                    </div>

                    <div className="title-header-right-div">
                      <div className="social-wrapper right-div">
                        <div className="checkout-wrapper">
                          <div className="checkout">
                            <a href="/viewcart" className="btn btn-info btn-lg">
                              <p>Shopping Cart</p>
                                <i className="fas fa-shopping-cart fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>




                </div>

          </div>
        </div>
      </div>

    </div>
  </div>

          <div className="bottom-header">
            <a className="active" href="/">Home</a>
            <a href="/viewcart">View Cart <i className="fas fa-shopping-cart"></i></a>
            <a href="/about">About Us</a>
            <a href="/contact_us">Contact Us</a>

            <div className="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>




      <BrowserRouter>
        <Baselayout>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            {/* <Route path="/terms" component={TermsOfUse}/> */}
            {/* <Route path="/privacy" component={PrivacyPolicy}/> */}
            {/* <Route path="/opt-in-form" component={OptInForm}/> */}
            {/* <Route path="/login" component={Login}/> */}
            {/* <Route path="/register" component={Register}/> */}
            {/* <Route path="/myaccount" component={MyAccount}/> */}
            {/* <Route path="/checkout" component={Checkout}/> */}
            {/* <Route path="/product_lines" component={ProductLines}/> */}
            {/* <Route path="/contact_us" component={ContactUs}/> */}
            {/* <Route path="/viewcart" component={ViewCart}/> */}
            <Route path="/product_pages/prodID409" component={prodID409}/>
            <Route path="/product_pages/prodID8" component={prodID8}/>
            <Route path="/product_pages/prodID341" component={prodID341}/>
            <Route path="/product_pages/prodID14" component={prodID14}/>
            <Route path="/product_pages/prodID643" component={prodID643}/>
            <Route path="/product_pages/prodID1170" component={prodID1170}/>
            <Route path="/product_pages/prodID1423" component={prodID1423}/>
            <Route path="/product_pages/prodID1425" component={prodID1425}/>
            {/* <Route path="/product_pages/prodID1426" component={prodID1426}/> */}
            {/* <Route path="/product_pages/prodID1460" component={prodID1460}/> */}
            {/* <Route path="/product_pages/prodID1467" component={prodID1467}/> */}
            {/* <Route path="/product_pages/prodID1469" component={prodID1469}/> */}
            {/* <Route path="/product_pages/prodID1476" component={prodID1476}/> */}
            {/* <Route path="/product_pages/prodID1437" component={prodID1437}/> */}
            {/* <Route path="/subcat=205/prodID1506" component={prodID1506}/> */}
            {/* <Route path="/subcat=205/prodID1507" component={prodID1507}/> */}
            {/* <Route path="/subcat=205/prodID1508" component={prodID1508}/> */}
            {/* <Route path="/subcat=205/prodID1509" component={prodID1509}/> */}
            {/* <Route path="/subcat=205/prodID1510" component={prodID1510}/> */}
            {/* <Route path="/subcat=205/prodID1511" component={prodID1511}/> */}
            {/* <Route path="/subcat=205/prodID1512" component={prodID1512}/> */}
            {/* <Route path="/subcat=205/prodID1513" component={prodID1513}/> */}
            {/* <Route path="/subcat=205/prodID1514" component={prodID1514}/> */}
            {/* <Route path="/subcat=205/prodID1515" component={prodID1515}/> */}
            {/* <Route path="/subcat=205/prodID1516" component={prodID1516}/> */}
            {/* <Route path="/subcat=205/prodID1517" component={prodID1517}/> */}
            {/* <Route path="/subcat=205/prodID1518" component={prodID1518}/> */}
            {/* <Route path="/subcat=205/prodID1519" component={prodID1519}/> */}
            {/* <Route path="/subcat=205/prodID1520" component={prodID1520}/> */}
            {/* <Route path="/subcat=205/prodID1521" component={prodID1521}/> */}
            {/* <Route path="/subcat=205/prodID1522" component={prodID1522}/> */}
            {/* <Route path="/subcat=205/prodID1523" component={prodID1523}/> */}
            {/* <Route path="/subcat=205/prodID1524" component={prodID1524}/> */}
            {/* <Route path="/subcat=205/prodID1525" component={prodID1525}/> */}
            {/* <Route path="/subcat=205/prodID1526" component={prodID1526}/> */}
            {/* <Route path="/subcat=205/prodID1527" component={prodID1527}/> */}
            {/* <Route path="/subcat=205/prodID1528" component={prodID1528}/> */}
            {/* <Route path="/subcat=205/prodID1529" component={prodID1529}/> */}
            {/* <Route path="/subcat=205/prodID1530" component={prodID1530}/> */}
            {/* <Route path="/subcat=205/prodID1531" component={prodID1531}/> */}
            {/* <Route path="/subcat=205/prodID1532" component={prodID1532}/> */}
            {/* <Route path="/subcat=205/prodID1518" component={prodID1518}/> */}
            {/* <Route path="/subcat=205/prodID1533" component={prodID1533}/> */}
            {/* <Route path="/subcat=205/prodID1534" component={prodID1534}/> */}
            {/* <Route path="/subcat=205/prodID1535" component={prodID1535}/> */}
            {/* <Route path="/subcat=205/prodID1536" component={prodID1536}/> */}
            {/* <Route path="/subcat=205/prodID1537" component={prodID1537}/> */}
            {/* <Route path="/subcat=205/prodID1538" component={prodID1538}/> */}
            {/* <Route path="/subcat=205/prodID1539" component={prodID1539}/> */}
            {/* <Route path="/subcat=205/prodID1540" component={prodID1540}/> */}
            {/* <Route path="/subcat=205/prodID1541" component={prodID1541}/> */}
            {/* <Route path="/subcat=205/prodID1542" component={prodID1542}/> */}
            {/* <Route path="/subcat=205/prodID1543" component={prodID1543}/> */}
            {/* <Route path="/subcat=205/prodID1544" component={prodID1544}/> */}
            {/* <Route path="/subcat=205/prodID1545" component={prodID1545}/> */}
            {/* <Route path="/subcat=205/prodID1546" component={prodID1546}/> */}
            {/* <Route path="/subcat=205/prodID1547" component={prodID1547}/> */}
            {/* <Route path="/subcat=205/prodID1548" component={prodID1548}/> */}
            {/* <Route path="/subcat=205/prodID1549" component={prodID1549}/> */}
            {/* <Route path="/subcat=205/prodID1550" component={prodID1550}/> */}
            {/* <Route path="/subcat=205/prodID1551" component={prodID1551}/> */}
            {/* <Route path="/subcat=205/prodID1552" component={prodID1552}/> */}
            {/* <Route path="/subcat=205/prodID1553" component={prodID1553}/> */}
            {/* <Route path="/subcat=205/prodID1554" component={prodID1554}/> */}
            {/* <Route path="/subcat=205/prodID1555" component={prodID1555}/> */}
            {/* <Route path="/subcat=205/prodID1556" component={prodID1556}/> */}
            {/* <Route path="/subcat=205/prodID1557" component={prodID1557}/> */}
            {/* <Route path="/subcat=205/prodID1558" component={prodID1558}/> */}
            {/* <Route path="/subcat=205/prodID1559" component={prodID1559}/> */}
            {/* <Route path="/subcat=205/prodID1560" component={prodID1560}/> */}
            {/* <Route path="/subcat=205/prodID1561" component={prodID1561}/> */}
            {/* <Route path="/category_pages/category" component={Category}/> */}
            <Route path="/category_pages/cat_trident" component={Cat_Trident}/>
            <Route path="/category_pages/cat_sullivan_palatek" component={Cat_Sullivan_Palatek}/>
            <Route path="/category_pages/cat_zeks" component={Cat_Zeks}/>
            {/* <Route path="/subcat=205/ZTF_Replacement_Elements" component={ZTF_Replacement_Elements}/> */}
            {/* <Route path="/subcat=233/air_dryers" component={Air_Dryers}/> */}
            {/* <Route path="/subcat=233/compressed_air_filters" component={Compressed_Air_Filters}/> */}
            {/* <Route path="/subcat=233/filters" component={Filters}/> */}
            {/* <Route path="/subcat=233/grade_a_activated_carbon" component={Grade_A_Activated_Carbon}/> */}
            {/* <Route path="/subcat=233/grade_g_general_purpose" component={Grade_G_General_Purpose}/> */}
            {/* <Route path="/subcat=233/grade_p_particulate_bulk_liquid" component={Grade_P_Particulate_Bulk_Liquid}/> */}
            {/* <Route path="/subcat=233/grade_h_high_efficiency" component={Grade_H_High_Efficiency}/> */}
            {/* <Route path="/subcat=233/ztf_replacement_parts" component={ZTF_Replacement_Parts}/> */}
            {/* <Route path="/subcat=244/air_compressors" component={Air_Compressors}/> */}
            {/* <Route path="/subcat=249/desiccant_air_dryers" component={Desiccant_Air_Dryers}/> */}
            {/* <Route path="/subcat=251/particulate_filters" component={Particulate_Filters}/> */}
            {/* <Route path="/subcat=252/coalescing_filters" component={Coalescing_Filters}/> */}
            {/* <Route path="/subcat=244/prodID1633" component={prodID1633}/> */}
            {/* <Route path="/subcat=244/prodID1641" component={prodID1641}/> */}
            {/* <Route path="/subcat=244/prodID1640" component={prodID1640}/> */}
            {/* <Route path="/subcat=244/prodID1639" component={prodID1639}/> */}
            {/* <Route path="/subcat=244/prodID1638" component={prodID1638}/> */}
            {/* <Route path="/subcat=244/prodID1637" component={prodID1637}/> */}
            {/* <Route path="/subcat=244/prodID1636" component={prodID1636}/> */}
            {/* <Route path="/subcat=244/prodID1635" component={prodID1635}/> */}
            {/* <Route path="/subcat=244/prodID1634" component={prodID1634}/> */}
            {/* <Route path="/subcat=244/prodID1642" component={prodID1642}/> */}
            {/* <Route path="/subcat=251/prodID1702" component={prodID1702}/> */}
            {/* <Route path="/subcat=251/prodID1703" component={prodID1703}/> */}
            {/* <Route path="/subcat=251/prodID1704" component={prodID1704}/> */}
            {/* <Route path="/subcat=249/prodID1706" component={prodID1706}/> */}
            {/* <Route path="/subcat=249/prodID1707" component={prodID1707}/> */}
            {/* <Route path="/subcat=249/prodID1708" component={prodID1708}/> */}
            {/* <Route path="/subcat=249/prodID1709" component={prodID1709}/> */}
            {/* <Route path="/subcat=249/prodID1710" component={prodID1710}/> */}
            {/* <Route path="/subcat=249/prodID1711" component={prodID1711}/> */}
            {/* <Route path="/subcat=249/prodID1712" component={prodID1712}/> */}
            {/* <Route path="/subcat=249/prodID1713" component={prodID1713}/> */}
            {/* <Route path="/subcat=249/prodID1714" component={prodID1714}/> */}
            {/* <Route path="/subcat=249/prodID1715" component={prodID1715}/> */}
            {/* <Route path="/subcat=249/prodID1716" component={prodID1716}/> */}
            {/* <Route path="/subcat=252/prodID1719" component={prodID1719}/> */}
            {/* <Route path="/subcat=252/prodID1720" component={prodID1720}/> */}
            {/* <Route path="/subcat=252/prodID1722" component={prodID1722}/> */}
            {/* <Route path="/subcat=233/prodID1771" component={prodID1771}/> */}
            {/* <Route path="/subcat=233/prodID1772" component={prodID1772}/> */}
            {/* <Route path="/subcat=233/prodID1773" component={prodID1773}/> */}
            {/* <Route path="/subcat=233/prodID1774" component={prodID1774}/> */}
            {/* <Route path="/subcat=233/prodID1777" component={prodID1777}/> */}
            {/* <Route path="/subcat=233/prodID1778" component={prodID1778}/> */}
            {/* <Route path="/subcat=233/prodID1781" component={prodID1781}/> */}
            {/* <Route path="/subcat=233/prodID1782" component={prodID1782}/> */}
            {/* <Route path="/subcat=233/prodID1785" component={prodID1785}/> */}
            {/* <Route path="/subcat=233/prodID1786" component={prodID1786}/> */}
            {/* <Route path="/subcat=233/prodID1789" component={prodID1789}/> */}
            {/* <Route path="/subcat=233/prodID1790" component={prodID1790}/> */}
            {/* <Route path="/subcat=233/prodID1793" component={prodID1793}/> */}
            {/* <Route path="/subcat=233/prodID1794" component={prodID1794}/> */}
            {/* <Route path="/subcat=233/prodID1831" component={prodID1831}/> */}
            {/* <Route path="/subcat=233/prodID1775" component={prodID1775}/> */}
            {/* <Route path="/subcat=233/prodID1776" component={prodID1776}/> */}
            {/* <Route path="/subcat=233/prodID1779" component={prodID1779}/> */}
            {/* <Route path="/subcat=233/prodID1780" component={prodID1780}/> */}
            {/* <Route path="/subcat=233/prodID1783" component={prodID1783}/> */}
            {/* <Route path="/subcat=233/prodID1784" component={prodID1784}/> */}
            {/* <Route path="/subcat=233/prodID1787" component={prodID1787}/> */}
            {/* <Route path="/subcat=233/prodID1788" component={prodID1788}/> */}
            {/* <Route path="/subcat=233/prodID1791" component={prodID1791}/> */}
            {/* <Route path="/subcat=233/prodID1792" component={prodID1792}/> */}
            {/* <Route path="/subcat=233/prodID1795" component={prodID1795}/> */}
            {/* <Route path="/subcat=233/prodID1796" component={prodID1796}/> */}
            {/* <Route path="/subcat=233/prodID1797" component={prodID1797}/> */}
            {/* <Route path="/subcat=233/prodID1798" component={prodID1798}/> */}
            {/* <Route path="/subcat=233/prodID1799" component={prodID1799}/> */}
            {/* <Route path="/subcat=233/prodID1800" component={prodID1800}/> */}
            {/* <Route path="/subcat=233/prodID1801" component={prodID1801}/> */}
            {/* <Route path="/subcat=233/prodID1802" component={prodID1802}/> */}
            {/* <Route path="/subcat=233/prodID1803" component={prodID1803}/> */}
            {/* <Route path="/subcat=233/prodID1804" component={prodID1804}/> */}
            {/* <Route path="/subcat=233/prodID1805" component={prodID1805}/> */}
            {/* <Route path="/subcat=233/prodID1806" component={prodID1806}/> */}
            {/* <Route path="/subcat=233/prodID1807" component={prodID1807}/> */}
            {/* <Route path="/subcat=233/prodID1808" component={prodID1808}/> */}
            {/* <Route path="/subcat=233/prodID1809" component={prodID1809}/> */}
            {/* <Route path="/subcat=233/prodID1810" component={prodID1810}/> */}
            {/* <Route path="/subcat=233/prodID1811" component={prodID1811}/> */}
            {/* <Route path="/subcat=233/prodID1812" component={prodID1812}/> */}
            {/* <Route path="/subcat=233/prodID1813" component={prodID1813}/> */}
            {/* <Route path="/subcat=233/prodID1814" component={prodID1814}/> */}
            {/* <Route path="/subcat=233/prodID1815" component={prodID1815}/> */}
            {/* <Route path="/subcat=233/prodID1816" component={prodID1816}/> */}
            {/* <Route path="/subcat=233/prodID1817" component={prodID1817}/> */}
            {/* <Route path="/subcat=233/prodID1818" component={prodID1818}/> */}
            {/* <Route path="/subcat=233/prodID1819" component={prodID1819}/> */}
            {/* <Route path="/subcat=233/prodID1820" component={prodID1820}/> */}
            {/* <Route path="/subcat=233/prodID1821" component={prodID1821}/> */}
            {/* <Route path="/subcat=233/prodID1822" component={prodID1822}/> */}
            {/* <Route path="/subcat=233/prodID1823" component={prodID1823}/> */}
            {/* <Route path="/subcat=233/prodID1824" component={prodID1824}/> */}
            {/* <Route path="/subcat=233/prodID1825" component={prodID1825}/> */}
            {/* <Route path="/subcat=233/prodID1826" component={prodID1826}/> */}
            {/* <Route path="/subcat=233/prodID1827" component={prodID1827}/> */}
            {/* <Route path="/subcat=233/prodID1828" component={prodID1828}/> */}
            {/* <Route path="/subcat=233/prodID1829" component={prodID1829}/> */}
            {/* <Route path="/subcat=233/prodID1830" component={prodID1830}/> */}
            {/* <Route path="/subcat=233/prodID1832" component={prodID1832}/> */}
            {/* <Route path="/subcat=233/prodID1833" component={prodID1833}/> */}
            {/* <Route path="/subcat=233/prodID1834" component={prodID1834}/> */}
            {/* <Route path="/subcat=233/prodID1835" component={prodID1835}/> */}
            {/* <Route path="/subcat=233/prodID1836" component={prodID1836}/> */}
            {/* <Route path="/subcat=233/prodID1837" component={prodID1837}/> */}
            {/* <Route path="/subcat=233/prodID1838" component={prodID1838}/> */}
            {/* <Route path="/subcat=233/prodID1839" component={prodID1839}/> */}
            {/* <Route path="/subcat=233/prodID1840" component={prodID1840}/> */}
            {/* <Route path="/subcat=233/prodID1841" component={prodID1841}/> */}
            {/* <Route path="/subcat=233/prodID1842" component={prodID1842}/> */}
            {/* <Route path="/subcat=233/prodID1843" component={prodID1843}/> */}
            {/* <Route path="/subcat=233/prodID1844" component={prodID1844}/> */}
            {/* <Route path="/subcat=233/prodID1845" component={prodID1845}/> */}
            {/* <Route path="/subcat=233/prodID1846" component={prodID1846}/> */}
            {/* <Route path="/subcat=233/prodID1847" component={prodID1847}/> */}
            {/* <Route path="/subcat=233/prodID1848" component={prodID1848}/> */}
            {/* <Route path="/subcat=233/prodID1849" component={prodID1849}/> */}
            {/* <Route path="/subcat=233/prodID1850" component={prodID1850}/> */}
            {/* <Route path="/subcat=233/prodID1851" component={prodID1851}/> */}
            {/* <Route path="/subcat=233/prodID1852" component={prodID1852}/> */}
            {/* <Route path="/subcat=233/prodID1853" component={prodID1853}/> */}
            {/* <Route path="/subcat=233/prodID1854" component={prodID1854}/> */}
            {/* <Route path="/subcat=233/prodID1855" component={prodID1855}/> */}
            {/* <Route path="/subcat=233/prodID1856" component={prodID1856}/> */}
            {/* <Route path="/subcat=233/prodID1857" component={prodID1857}/> */}
            {/* <Route path="/subcat=233/prodID1858" component={prodID1858}/> */}
            {/* <Route path="/subcat=233/prodID1859" component={prodID1859}/> */}
            {/* <Route path="/subcat=233/prodID1860" component={prodID1860}/> */}
            {/* <Route path="/subcat=233/prodID1861" component={prodID1861}/> */}
            {/* <Route path="/subcat=233/prodID1862" component={prodID1862}/> */}
            {/* <Route path="/subcat=233/prodID1863" component={prodID1863}/> */}
            {/* <Route path="/subcat=233/prodID1864" component={prodID1864}/> */}
            {/* <Route path="/subcat=233/prodID1865" component={prodID1865}/> */}
            {/* <Route path="/subcat=233/prodID1866" component={prodID1866}/> */}
            {/* <Route path="/subcat=233/prodID1867" component={prodID1867}/> */}
            {/* <Route path="/subcat=233/prodID1868" component={prodID1868}/> */}
            {/* <Route path="/subcat=233/prodID1869" component={prodID1869}/> */}
            {/* <Route path="/subcat=233/prodID1870" component={prodID1870}/> */}
            {/* <Route path="/subcat=233/prodID1871" component={prodID1871}/> */}
            {/* <Route path="/subcat=233/prodID1872" component={prodID1872}/> */}
            {/* <Route path="/subcat=233/prodID1873" component={prodID1873}/> */}
            {/* <Route path="/subcat=233/prodID1874" component={prodID1874}/> */}
            {/* <Route path="/subcat=233/prodID1875" component={prodID1875}/> */}
            {/* <Route path="/subcat=233/prodID1876" component={prodID1876}/> */}
            {/* <Route path="/subcat=233/prodID1877" component={prodID1877}/> */}
            {/* <Route path="/subcat=233/prodID1878" component={prodID1878}/> */}
            {/* <Route path="/subcat=233/prodID1879" component={prodID1879}/> */}
            {/* <Route path="/subcat=233/prodID1880" component={prodID1880}/> */}
            {/* <Route path="/subcat=233/prodID1881" component={prodID1881}/> */}
            {/* <Route path="/subcat=233/prodID1882" component={prodID1882}/> */}
            {/* <Route path="/subcat=233/prodID1883" component={prodID1883}/> */}
            {/* <Route path="/subcat=233/prodID1884" component={prodID1884}/> */}
            {/* <Route path="/subcat=233/prodID1885" component={prodID1885}/> */}
            {/* <Route path="/subcat=233/prodID1886" component={prodID1886}/> */}
            {/* <Route path="/subcat=233/prodID1887" component={prodID1887}/> */}
            {/* <Route path="/subcat=233/prodID1888" component={prodID1888}/> */}
            {/* <Route path="/subcat=233/prodID1889" component={prodID1889}/> */}
            {/* <Route path="/subcat=233/prodID1890" component={prodID1890}/> */}
            {/* <Route path="/subcat=233/prodID1891" component={prodID1891}/> */}
            {/* <Route path="/subcat=233/prodID1892" component={prodID1892}/> */}
            {/* <Route path="/subcat=233/prodID1893" component={prodID1893}/> */}
            {/* <Route path="/subcat=233/prodID1894" component={prodID1894}/> */}
            {/* <Route path="/subcat=233/prodID1895" component={prodID1895}/> */}
            {/* <Route path="/subcat=233/prodID1896" component={prodID1896}/> */}
            {/* <Route path="/subcat=233/prodID1897" component={prodID1897}/> */}
            {/* <Route path="/subcat=233/prodID1898" component={prodID1898}/> */}















          </Switch>
        </Baselayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
