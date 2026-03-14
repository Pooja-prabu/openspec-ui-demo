import { useState } from 'react';
import { Header, Layout, Container, Section, Card, Button, Input, Footer } from './components';
import './styles/global.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleReset = () => {
    setCount(0);
    setName('');
    setEmail('');
  };

  return (
    <Layout>
      <Header
        title="React UI Application"
        subtitle="Built with modern React, hooks, and CSS Modules"
      />

      <Section>
        <Container>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '32px',
            }}
          >
            <Card title="Counter Example" description="Demonstrates React hooks (useState)">
              <p style={{ marginBottom: '16px', color: '#6b7280' }}>
                Current count: <strong style={{ fontSize: '24px', color: '#3b82f6' }}>{count}</strong>
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button onClick={() => setCount(count + 1)} variant="primary">
                  Increment
                </Button>
                <Button onClick={() => setCount(count - 1)} variant="secondary">
                  Decrement
                </Button>
              </div>
            </Card>

            <Card title="Component System" description="Reusable and composable components">
              <p style={{ marginBottom: '16px', color: '#6b7280' }}>
                This application demonstrates:
              </p>
              <ul
                style={{
                  paddingLeft: '20px',
                  color: '#6b7280',
                  lineHeight: '1.8',
                }}
              >
                <li>Functional components with hooks</li>
                <li>CSS Modules for scoped styling</li>
                <li>Props-based configuration</li>
                <li>Responsive design</li>
              </ul>
            </Card>

            <Card title="Form Example" description="Controlled components with state">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={setName}
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={setEmail}
                  type="email"
                />
                {(name || email) && (
                  <div
                    style={{
                      padding: '12px',
                      backgroundColor: '#ecfdf5',
                      borderRadius: '8px',
                      color: '#065f46',
                      fontSize: '14px',
                    }}
                  >
                    <strong>Form Data:</strong>
                    <br />
                    Name: {name || '(empty)'} <br />
                    Email: {email || '(empty)'}
                  </div>
                )}
              </div>
            </Card>
          </div>

          <Card title="Design Features" description="Showcasing the component library">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <Button variant="primary" size="sm">
                Small Primary
              </Button>
              <Button variant="secondary" size="md">
                Medium Secondary
              </Button>
              <Button variant="danger" size="lg">
                Large Danger
              </Button>
              <Button disabled>Disabled Button</Button>
            </div>

            <p style={{ color: '#6b7280', marginBottom: '16px' }}>
              All components are built with:
            </p>
            <ul
              style={{
                paddingLeft: '20px',
                color: '#6b7280',
                lineHeight: '1.8',
              }}
            >
              <li><strong>Reusable Architecture:</strong> Components accept props for flexible configuration</li>
              <li><strong>Responsive Design:</strong> Mobile-first approach with media queries</li>
              <li><strong>CSS Modules:</strong> Scoped styling prevents style conflicts</li>
              <li><strong>State Management:</strong> React hooks for local and global state</li>
              <li><strong>Hot Reloading:</strong> Instant feedback during development</li>
            </ul>

            <div style={{ marginTop: '24px' }}>
              <Button onClick={handleReset} variant="secondary" fullWidth>
                Reset Form and Counter
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      <Footer />
    </Layout>
  );
}
