CREATE TABLE IF NOT EXISTS bookings (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  booking_date DATE NOT NULL,
  slot VARCHAR(80) NOT NULL,
  service VARCHAR(80) NOT NULL,
  customer_name VARCHAR(120) NOT NULL,
  contact VARCHAR(180) NOT NULL,
  message TEXT NULL,
  status ENUM('requested', 'confirmed', 'cancelled') NOT NULL DEFAULT 'requested',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY unique_slot (booking_date, slot),
  KEY booking_date_idx (booking_date),
  KEY status_idx (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS gallery_images (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  image_path VARCHAR(255) NOT NULL,
  thumb_path VARCHAR(255) NOT NULL,
  alt_text VARCHAR(180) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  is_visible TINYINT(1) NOT NULL DEFAULT 1,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY visible_sort_idx (is_visible, sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
