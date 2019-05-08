import React from 'react';
import { Modal, Button } from 'antd';
import { styleModal } from '../../components/InfoModal/InfoModalStyles';
import InfoModal from '../../components/InfoModal';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  state = {
    ModalText: 'Tytul filmu,opis, godziny',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal with async logic{' '}
        </Button>{' '}
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p> {ModalText} </p>{' '}
        </Modal>{' '}
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <InfoModal />
  //     </div>
  //   );
  // }
}

export default Main;
