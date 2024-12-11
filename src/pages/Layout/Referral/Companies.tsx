import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Grid,
  Card,
  Typography,
  Chip,
  Avatar,
  Button,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GooglePayButton from '@google-pay/button-react';
import { map } from 'lodash/fp';
import type { CompanyReferral } from '#domain/Obudle/CompanyReferral';
import Apple from '../../../assets/Apple-Logo.png';
import Microsoft from '../../../assets/microsoft.jpg';
import Netflix from '../../../assets/netflix.png';
import Google from '../../../assets/google.jpg';
import Amazon from '../../../assets/amazon.jpg';

const companiesData = [
  {
    id: 1, name: 'Apple', tags: ['Finance', 'Gaming', 'Tech'], logo: Apple, isTrending: true,
  },
  {
    id: 2, name: 'Amazon', tags: ['Commerce', 'Gaming', 'Tech'], logo: Amazon,
  },
  {
    id: 3,
    name: 'Microsoft',
    tags: ['Finance', 'Gaming', 'Tech'],
    logo: Microsoft,
    isTrending: true,
  },
  {
    id: 4, name: 'Netflix', tags: ['Entertainment', 'Streaming'], logo: Netflix,
  },
  {
    id: 5, name: 'Google', tags: ['Tech', 'Search Engine'], logo: Google,
  },
];

const categories = [
  'All', 'Finance', 'Gaming', 'Tech', 'Entertainment', 'Commerce', 'Streaming', 'Search Engine',
];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [companies, setCompanies] = useState(companiesData);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<CompanyReferral | null>(null);
  const [resumeError, setResumeError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const handleSubmit = useCallback(() => {
    if (resumeFile) {
      console.log('Submitting resume file:', resumeFile);
    }
  }, [resumeFile]);

  const handleResumeUpload = useCallback((event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setResumeFile(file);
        setPdfUrl(URL.createObjectURL(file));
        setResumeError('');
      } else {
        setResumeError('Please upload a PDF file.');
      }
    }
    handleSubmit();
  }, [handleSubmit]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null,
  });

  const handleSearch = useCallback((e: any) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSort = useCallback((e: any) => {
    const { value } = e.target;
    setSortBy(value);

    const sortedCompanies = [...companies];

    if (value === 'Most Popular') {
      sortedCompanies.sort((a, b) => {
        if (a.isTrending && !b.isTrending) {
          return -1;
        } if (!a.isTrending && b.isTrending) {
          return 1;
        }
        return 0;
      });
    } else if (value === 'Newest') {
      sortedCompanies.reverse();
    }

    setCompanies(sortedCompanies);
  }, [companies]);

  const handleCategoryFilter = useCallback((e: any) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'All') {
      setCompanies(companiesData);
    } else {
      setCompanies(companiesData.filter((company) => company.tags.includes(category)));
    }
  }, []);

  const handleReferClick = useCallback((company: CompanyReferral) => {
    setSelectedCompany(company);
    setOpenPopup(true);
  }, []);

  const handleFormChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }, [formData]);

  const filteredCompanies = useMemo(() => companies.filter(
    (company) => company.name.toLowerCase().includes(
      searchTerm.toLowerCase(),
    ),
  ), [companies, searchTerm]);

  const memoizedCategories = useMemo(() => categories, []);

  return (
    <Box
      sx={{
        backgroundColor: '#fafaff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        marginTop: 7,
      }}
    >
      <Box textAlign="center" mb={3} maxWidth="800px">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: '#1F2937',
            lineHeight: 1.4,
            fontSize: { xs: '1.8rem', sm: '2.4rem' },
          }}
        >
          Get Referrals for Your Dream Companies Across
          {' '}
          <span style={{ color: '#0369A1' }}>100+ Countries</span>
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Discover the top companies to elevate your career. Refine your search by industry,
          relevance, or trending categories. Start exploring today and take the first step toward
          your professional growth.
        </Typography>
      </Box>

      <Box
        display="flex"
        gap={2}
        mb={4}
        alignItems="center"
        width="100%"
        maxWidth="800px"
        sx={{ backgroundColor: 'fafaff    ', padding: 2, borderRadius: 2 }}
      >
        <TextField
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a company..."
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon={faSearch} style={{ color: '#757575' }} />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: '#ffffff', borderRadius: 2 }}
        />
        <Select
          value={sortBy}
          onChange={handleSort}
          displayEmpty
          variant="outlined"
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 2,
            minWidth: '150px',
            '& .MuiSelect-select': { padding: '10px 14px' },
          }}
        >
          <MenuItem value="Most Popular">Most Popular</MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </Select>
        <Select
          value={selectedCategory}
          onChange={handleCategoryFilter}
          displayEmpty
          variant="outlined"
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 2,
            minWidth: '150px',
            '& .MuiSelect-select': { padding: '10px 14px' },
          }}
        >
          {map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ), memoizedCategories)}
        </Select>
      </Box>

      <Grid container spacing={4} sx={{ maxWidth: '1200px', marginTop: 2, marginBottom: 7 }}>
        {map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.id}>
            <Card
              sx={{
                padding: 3,
                borderRadius: 3,
                textAlign: 'center',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Avatar
                src={company.logo}
                alt={company.name}
                sx={{
                  width: 80,
                  height: 80,
                  margin: '0 auto',
                  marginBottom: 2,
                }}
              />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {company.name}
              </Typography>
              <Box display="flex" justifyContent="center" flexWrap="wrap" gap={1} mb={2}>
                {company.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: '#e3f2fd',
                      color: '#0369A1',
                      fontWeight: 'bold',
                    }}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  backgroundColor: '#0369A1',
                  padding: '2px 12px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                }}
                onClick={() => handleReferClick(company)}
              >
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
                Refer
              </Button>
            </Card>
          </Grid>
        ), filteredCompanies)}
      </Grid>

      <Dialog open={openPopup} onClose={() => setOpenPopup(false)} fullWidth>
        <DialogTitle>
          Request a Referral to
          {' '}
          {selectedCompany?.name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Fill in the details to send your referral request for
            {' '}
            {selectedCompany?.name}
          </Typography>

          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleFormChange}
            fullWidth
            required
            margin="normal"
          />
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                marginBottom: '10px',
                marginTop: '10px',
                backgroundColor: '#075985',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#063c52',
                },
                fontWeight: 'bold',
                borderRadius: '8px',
                padding: '10px',
              }}
            >
              Upload Resume (PDF only)
              <input
                type="file"
                hidden
                accept="application/pdf"
                onChange={handleResumeUpload}
                required
              />
            </Button>
            {resumeError && <Typography color="error" variant="body2">{resumeError}</Typography>}

            {pdfUrl && (
              <Typography variant="body1" mt={2}>
                Resume Uploaded:
                {' '}
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">View PDF</a>
              </Typography>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenPopup(false)}
            sx={{
              color: '#075985',
            }}
          >
            Cancel
          </Button>
          <GooglePayButton
            environment="TEST"
            buttonSizeMode="fill"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '80.00',
                currencyCode: 'USD',
                countryCode: 'US',
              },
            }}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Companies;
