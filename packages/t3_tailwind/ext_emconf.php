<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

$EM_CONF[$_EXTKEY] = [
    'title' => 'T3 Tailwind Site Package',
    'description' => 'A site package with Tailwind CSS',
    'category' => 'templates',
    'author' => 'Leander Christmann',
    'author_email' => 'hello@lchristmann.com',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-8.7.99'
        ],
    ],
];
