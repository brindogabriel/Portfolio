/* eslint-disable @next/next/no-img-element */
export default function Page() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-4">
            <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                <img
                    src="./images/thank-you-envelope.webp"
                    alt="Thank You Envelope"
                    width="200"
                    height="200"
                    className="mx-auto"
                />
                <h2 className="text-2xl sm:text-3xl font-bold mt-4">
                    ¡Gracias por ponerte en contacto conmigo!
                </h2>
                <a
                    href="./"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                    Volver
                </a>
            </div>
        </div>
    );
}
