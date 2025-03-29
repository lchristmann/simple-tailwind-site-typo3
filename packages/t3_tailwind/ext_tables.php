<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    't3_tailwind',
    'Configuration/TypoScript',
    'T3 Tailwind Site Package'
);