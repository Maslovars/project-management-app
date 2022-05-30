import React, { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Error, Button } from './ErrorBoundary.styled';

export interface ErrorBoundaryProps {
  children: ReactNode;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  handelClick = () => {
    this.setState({ hasError: false });
  };

  errorMessage = (error: string) => (
    <Container>
      <Error>{error}</Error>
      <Button onClick={this.handelClick}>Retry</Button>
    </Container>
  );

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true, error: error.message });
    toast.error(this.errorMessage(error.message));
  }

  render() {
    if (this.state.hasError) {
      return (
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
