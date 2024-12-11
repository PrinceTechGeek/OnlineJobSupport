import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { jsPDF as JsPdf } from 'jspdf';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { map } from 'lodash/fp';

type ReviewsandDemandProps = {
  reviews: Record<string, number> | null | undefined;
};

const ReviewsandDemand = ({
  reviews,
}: ReviewsandDemandProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGenerateCertificate = () => {
    const doc = new JsPdf({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    doc.setDrawColor(0, 120, 212);
    doc.setLineWidth(10);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30, 'S');

    doc.setDrawColor(173, 216, 230);
    doc.setLineWidth(5);
    doc.rect(25, 25, pageWidth - 50, pageHeight - 50, 'S');

    doc.setFontSize(36);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Completion', pageWidth / 2, 90, {
      align: 'center',
    });

    doc.setFontSize(18);
    doc.setFont('helvetica', 'normal');
    doc.text('This is to certify that', pageWidth / 2, 110, {
      align: 'center',
    });

    doc.setFontSize(24);
    doc.setTextColor(0, 120, 212);
    doc.text(name, pageWidth / 2, 130, {
      align: 'center',
    });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text('has successfully completed the', pageWidth / 2, 145, {
      align: 'center',
    });
    doc.text('DevOps Training Course with Certificate', pageWidth / 2, 155, {
      align: 'center',
    });

    doc.setFontSize(14);
    const currentDate = new Date().toLocaleDateString();
    doc.text(`Completion Date: ${currentDate}`, pageWidth / 2, 170, {
      align: 'center',
    });

    doc.setDrawColor(0, 0, 0);
    doc.line(pageWidth / 2 - 30, 200, pageWidth / 2 + 30, 200);
    doc.text('Authorized Signature', pageWidth / 2, 210, {
      align: 'center',
    });

    doc.save(`${name}_DevOps_Certificate.pdf`);

    handleClose();
  };

  const reviewItems = map(
    ([platform, rating]: [string, number]) => (
      <Box
        key={platform}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={2}
      >
        <Typography variant="body1" fontWeight="bold" textTransform="capitalize">
          {platform}
          {' '}
          Reviews
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {rating}
          <FontAwesomeIcon icon={faStar} style={{ color: '#4A5568', marginLeft: '8px' }} />
        </Typography>
      </Box>
    ),
    Object.entries(reviews || {}),
  );

  return (
    <Box p={3} border="1px solid #ddd" borderRadius="8px" bgcolor="#f9f9f9">
      <Typography variant="h6" gutterBottom>
        Reviews & Market Demand
      </Typography>
      <Divider />

      {reviewItems}

      <Box mt={3}>
        <Typography variant="body1" fontWeight="bold">
          Market Demand:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: '#e3f2fd',
            borderRadius: '8px',
            padding: '8px 16px',
            mt: 2,
          }}
        >
          <Typography variant="body2" color="primary">
            This course is in high demand across the industry!
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color="primary" mr={1}>
              Demand Level:
            </Typography>
            <Box
              sx={{
                width: 50,
                height: 5,
                borderRadius: 5,
                bgcolor: '#0078d4',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box mt={3} textAlign="center">
        <Typography variant="body1" color="textSecondary">
          This course has received excellent reviews across multiple platforms, and with its
          high demand in the industry, it&rsquo;s a perfect choice for boosting your career.
        </Typography>
      </Box>

      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ margin: 2 }}
        >
          Download Certificate
        </Button>

        <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
          <DialogTitle>Generate Course Completion Certificate</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleGenerateCertificate}
              color="primary"
              disabled={!name.trim()}
            >
              Download
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ReviewsandDemand;
