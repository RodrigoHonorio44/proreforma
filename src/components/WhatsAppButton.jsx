import React from 'react';

const whatsappNumber = '5521975966330';

const styles = {
    container: {
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: '#25d366',
        color: 'white',
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        fontSize: 30,
        textDecoration: 'none',
        zIndex: 1000,
    },
};

function WhatsAppButton() {
    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={styles.container}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M20.52 3.48A11.827 11.827 0 0 0 12 0C5.373 0 0 5.373 0 12a11.838 11.838 0 0 0 2.235 7.07L0 24l4.936-2.11A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.215-1.257-6.227-3.48-8.52zM12 22c-2.13 0-4.147-.704-5.727-1.885l-.41-.27-2.932 1.254 1.27-2.914-.273-.414A9.927 9.927 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.223-7.464c-.276-.138-1.632-.805-1.884-.898-.253-.093-.438-.138-.622.138-.185.276-.715.898-.877 1.083-.161.185-.323.208-.599.069-.276-.138-1.165-.429-2.22-1.37-.82-.73-1.373-1.63-1.534-1.907-.161-.276-.017-.426.12-.564.123-.122.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.622-1.5-.851-2.056-.224-.539-.452-.466-.622-.475l-.53-.01c-.184 0-.483.069-.737.345-.253.276-.967.945-.967 2.304 0 1.36.99 2.677 1.129 2.864.138.184 1.95 2.98 4.722 4.179.659.284 1.172.453 1.57.58.66.211 1.26.181 1.735.11.529-.08 1.632-.666 1.863-1.31.23-.645.23-1.197.161-1.31-.069-.112-.253-.184-.53-.322z" />
            </svg>
        </a>
    );
}

export default React.memo(WhatsAppButton);
