import React from 'react';

const styles = {
  page: {
    minHeight: 'calc(100vh - 10rem)'
  }
};

export default function PageContainer({ children }) {
  return (
    <div className='container-sm d-flex justify-content-center'>
      <div className='glass-container' style={styles.page}>
        { children }
      </div>
    </div>
  );
}
