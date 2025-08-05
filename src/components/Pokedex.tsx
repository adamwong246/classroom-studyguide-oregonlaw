import { useState } from 'react';
import LicenseMonDisplay from '../LicenseMonDisplay';
import licenseMonsData from '../licenseMons.json';
import './Pokedex.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

interface LicenseMon {
  id: number;
  name: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
  description?: string;
}

export default function Pokedex() {
  const [selectedMon, setSelectedMon] = useState<LicenseMon | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMons = licenseMonsData.filter(mon =>
    mon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="pe-md-2">
          <div className="pixel-card mb-3">
            <div className="card-header">LICENSEMON DIRECTORY</div>
            <div className="card-body">
              <Form.Control
                type="text"
                placeholder="SEARCH BY NAME OR TYPE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-3 pixel-input"
              />
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-2 row-cols-lg-3 g-2">
                {filteredMons.map(mon => (
                  <Col key={mon.id}>
                    <div 
                      className={`pixel-card ${selectedMon?.id === mon.id ? 'border-primary' : ''}`}
                      onClick={() => setSelectedMon(mon)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="card-body text-center p-2">
                        
                        <small className="d-block">#{mon.id.toString().padStart(3, '0')}</small>
                        <strong className="d-block">{mon.name}</strong>
                        
                      </div>
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </div>
        </Col>

        <Col md={7} className="ps-md-2">
          {selectedMon ? (
            <div className="pixel-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <span>{selectedMon.name}</span>
              </div>
              <div className="card-body">

                <LicenseMonDisplay mon={selectedMon} />
                
                <Row>
                  <Col md={6} className="mb-3 mb-md-0">
                    
                  </Col>
                  <Col md={6}>
                    <div>
                      <p>{selectedMon.description}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ) : (
            <div className="pixel-card text-center">
              <div className="card-body">
                <p>SELECT A LICENSEMON TO VIEW DETAILS</p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
