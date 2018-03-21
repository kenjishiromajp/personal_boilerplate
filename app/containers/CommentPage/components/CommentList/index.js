/**
 *
 * CommentList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const getColumns = (actionColumn) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
  ];
  if (actionColumn) {
    columns.push({
      title: 'Actions',
      key: 'actions',
      render: actionColumn,
    });
  }
  return columns;
};

const CommentList = ({ comments, actionColumn }) => {
  const columns = getColumns(actionColumn);
  return (
    <div className="comment-list">
      <Table
        size="middle"
        dataSource={comments.map((comment) => ({
          ...comment,
          key: comment.id,
          rowKey: comment.id,
        }))}
        columns={columns}
      />
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  actionColumn: PropTypes.func,
};

export default CommentList;
