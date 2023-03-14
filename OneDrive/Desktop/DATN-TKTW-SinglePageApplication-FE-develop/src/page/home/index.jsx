import Footer from '../../components/client/Footer.component';
import Header from '../../components/client/Header.component';
import ToastContainer from '../../utiliti/toast/Toast';
const HomePage = () => {
    const toast = () => {
        // ToastContainer("success", "hihi")
    }
    return (
        <div>
            home
            <button onClick={toast}>hihi</button>
        </div>
    );
};
export default HomePage;