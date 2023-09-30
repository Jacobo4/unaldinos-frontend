// Images
import hero from "@assets/images/home/RASI-Hero.webp";
// Styles
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={`container mx-auto mt-4 ${styles['Home']}`}>

                <div className={`${styles['hero']}`}>
                    <div>
                        <h2 className="text-6xl font-bold mb-4">Acerca de Nosotros</h2>
                        <p className="text-lg">
                            La empresa GESTIÓN EMPRESARIAL Y DESARROLLO DE SOFTWARE S.A.S. es una compañía constituida
                            en el
                            año 2012 y tiene su domicilio en la ciudad de Cúcuta (Norte de Santander). Su objeto
                            principal
                            es la concepción, análisis, diseño, desarrollo y comercialización de soluciones de software
                            de
                            gestión empresarial. Nuestro nombre comercial es RASI, misma denominación dada a nuestro
                            principal producto.
                        </p>
                    </div>
                    <img src={hero} alt=""/>
                </div>
                <div className="mt-4 bg-gray-100 p-4 rounded">
                    <h2 className="text-2xl font-bold mb-4">RASI MEDICAL</h2>
                    <p className="text-lg">
                        RASI MEDICAL es un software médico especializado en gestionar, optimizar y simplificar procesos
                        de atención en salud de manera integral. Su objetivo es mejorar la eficiencia y la calidad de la
                        atención médica al permitir que los profesionales de la salud y las instituciones médicas
                        gestionen de manera más efectiva la información clínica y los procesos relacionados con el
                        cuidado de los pacientes. Al ser una solución basada en la nube, este tipo de software busca
                        aprovechar las ventajas de la tecnología en la nube para facilitar el acceso, la automatización,
                        la seguridad y la colaboración en el ámbito médico.
                    </p>
                </div>
                <div className="mt-4 bg-gray-100 p-4 rounded">
                    <h2 className="text-2xl font-bold mb-4">Características Clave</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-lg">Integración de soluciones médicas y ERP</li>
                        <li className="text-lg">Administración eficiente de información de pacientes</li>
                        <li className="text-lg">Procesos clínicos y administrativos optimizados</li>
                        <li className="text-lg">Accesibilidad basada en la nube desde cualquier dispositivo</li>
                    </ul>
                </div>

        </div>
    );
};

export default Home;